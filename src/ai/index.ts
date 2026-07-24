#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { createChecker } from "vue-component-meta";

type ResourceKind = "component" | "hook" | "utility" | "constant" | "type";

interface ResourceManifest {
  /** Публичное имя экспорта из src/index.ts */
  name: string;

  kind: ResourceKind;

  /** Короткое назначение для поиска */
  description: string;

  /** Синонимы и поисковые слова */
  keywords?: string[];

  /** Когда ресурс следует использовать */
  useWhen?: string[];

  /** Не использовать */
  toAvoid?: string[];

  /** Короткие ограничения или важные правила */
  rules?: string[];

  /** Похожие или альтернативные ресурсы */
  alternatives?: string[];

  /**
   * Путь к исходнику относительно самого *.ai.json.
   *
   * Можно не указывать, если исходник имеет то же имя:
   *
   * Button.ai.json -> Button.vue
   * useDisclosure.ai.json -> useDisclosure.ts
   */
  source?: string;

  /**
   * Короткий эталонный пример.
   *
   * Добавлять только если назначение неочевидно из API.
   */
  example?: string;
}

interface LoadedResource {
  manifest: ResourceManifest;
  manifestPath: string;
  sourcePath: string;
}

interface SearchResult {
  name: string;
  kind: ResourceKind;
  description: string;
  score: number;
}

interface CompactComponentApi {
  props: Array<{
    name: string;
    type: string;
    required: boolean;
    default?: string;
    description?: string;
  }>;

  events: Array<{
    name: string;
    type?: string;
    description?: string;
  }>;

  slots: Array<{
    name: string;
    type?: string;
    description?: string;
  }>;

  exposed: Array<{
    name: string;
    type?: string;
    description?: string;
  }>;
}

interface TypeScriptApi {
  kind: ResourceKind;
  signatures?: string[];
  type?: string;
  declarations?: string[];
}

interface CliOptions {
  kinds?: ResourceKind[];
  limit: number;
  compact: boolean;
}

interface ValidationIssue {
  resource?: string;
  file?: string;
  message: string;
}

const RESOURCE_KINDS: ResourceKind[] = [
  "component",
  "hook",
  "utility",
  "constant",
  "type",
];

const SOURCE_EXTENSIONS = [".vue", ".ts", ".tsx", ".js", ".jsx"] as const;

/**
 * Определяется через путь запускаемого index.ts.
 *
 * apps/gui/src/ai/index.ts
 *              ↓ ../..
 * apps/gui
 */
const AI_FILE_PATH = path.resolve(process.argv[1]);
const AI_DIR = path.dirname(AI_FILE_PATH);
const GUI_ROOT = path.resolve(AI_DIR, "../..");
const SRC_DIR = path.join(GUI_ROOT, "src");
const ENTRY_PATH = path.join(SRC_DIR, "index.ts");

const TSCONFIG_PATH = findFirstExistingFile([
  path.join(GUI_ROOT, "tsconfig.json"),
  path.join(GUI_ROOT, "tsconfig.app.json"),
  path.join(GUI_ROOT, "tsconfig.node.json"),
]);

let vueMetaChecker: ReturnType<typeof createChecker> | undefined;
let typescriptContext: TypeScriptContext | undefined;

interface TypeScriptContext {
  program: ts.Program;
  checker: ts.TypeChecker;
  entrySourceFile: ts.SourceFile;
  exports: Map<string, ts.Symbol>;
}

async function main(): Promise<void> {
  const { command, positionals, options } = parseCliArguments(
    process.argv.slice(2),
  );

  switch (command) {
    case "search":
      await runSearch(positionals.join(" "), options);
      return;

    case "get":
      await runGet(positionals[0], options);
      return;

    case "list":
      await runList(options);
      return;

    case "validate":
      await runValidate(options);
      return;

    case "help":
    case undefined:
      printHelp();
      return;

    default:
      throw new Error(`Неизвестная команда: ${command}`);
  }
}

async function runSearch(query: string, options: CliOptions): Promise<void> {
  if (!query.trim()) {
    throw new Error('Укажи поисковый запрос: search "кнопка сохранения"');
  }

  const resources = loadResources();
  const queryTokens = tokenize(query);

  const results = resources
    .filter(({ manifest }) => matchesKind(manifest.kind, options.kinds))
    .map<SearchResult>(({ manifest }) => ({
      name: manifest.name,
      kind: manifest.kind,
      description: manifest.description,
      score: calculateSearchScore(manifest, queryTokens),
    }))
    .filter(({ score }) => score > 0)
    .sort(compareSearchResults)
    .slice(0, options.limit);

  printJson(
    {
      query,
      results,
    },
    options.compact,
  );
}

async function runGet(
  name: string | undefined,
  options: CliOptions,
): Promise<void> {
  if (!name) {
    throw new Error("Укажи имя ресурса: get Button");
  }

  const resources = loadResources();
  const resource = findResource(resources, name);

  if (!resource) {
    const suggestions = resources
      .map<SearchResult>(({ manifest }) => ({
        name: manifest.name,
        kind: manifest.kind,
        description: manifest.description,
        score: calculateSearchScore(manifest, tokenize(name)),
      }))
      .filter(({ score }) => score > 0)
      .sort(compareSearchResults)
      .slice(0, 5);

    printJson(
      {
        error: `Ресурс "${name}" не найден`,
        suggestions,
      },
      options.compact,
    );

    process.exitCode = 1;
    return;
  }

  const result: Record<string, unknown> = {
    ...resource.manifest,
    sourcePath: toGuiRelativePath(resource.sourcePath),
  };

  if (resource.manifest.kind === "component") {
    result.api = extractVueComponentApi(resource.sourcePath);
  } else {
    result.api = extractTypeScriptApi(resource);
  }

  printJson(result, options.compact);
}

async function runList(options: CliOptions): Promise<void> {
  const resources = loadResources()
    .filter(({ manifest }) => matchesKind(manifest.kind, options.kinds))
    .sort((left, right) =>
      left.manifest.name.localeCompare(right.manifest.name),
    )
    .map(({ manifest }) => ({
      name: manifest.name,
      kind: manifest.kind,
      description: manifest.description,
    }));

  printJson(
    {
      resources,
    },
    options.compact,
  );
}

async function runValidate(options: CliOptions): Promise<void> {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];

  let resources: LoadedResource[];

  try {
    resources = loadResources();
  } catch (error) {
    printJson(
      {
        valid: false,
        errors: [
          {
            message: getErrorMessage(error),
          },
        ],
        warnings: [],
      },
      options.compact,
    );

    process.exitCode = 1;
    return;
  }

  validateDuplicateNames(resources, errors);
  validatePublicExports(resources, errors, warnings);
  validateExtractedApis(resources, errors);

  const publicExports = collectPublicExportNames();

  for (const exportName of publicExports) {
    const hasManifest = resources.some(
      ({ manifest }) => manifest.name === exportName,
    );

    if (!hasManifest && shouldRequireManifest(exportName)) {
      warnings.push({
        resource: exportName,
        message: `Для публичного экспорта "${exportName}" не найден *.ai.json`,
      });
    }
  }

  const valid = errors.length === 0;

  printJson(
    {
      valid,
      stats: {
        manifests: resources.length,
        components: resources.filter(
          ({ manifest }) => manifest.kind === "component",
        ).length,
        hooks: resources.filter(({ manifest }) => manifest.kind === "hook")
          .length,
        utilities: resources.filter(
          ({ manifest }) => manifest.kind === "utility",
        ).length,
        constants: resources.filter(
          ({ manifest }) => manifest.kind === "constant",
        ).length,
        types: resources.filter(({ manifest }) => manifest.kind === "type")
          .length,
      },
      errors,
      warnings,
    },
    options.compact,
  );

  if (!valid) {
    process.exitCode = 1;
  }
}

function loadResources(): LoadedResource[] {
  if (!fs.existsSync(SRC_DIR)) {
    throw new Error(`Не найдена директория: ${SRC_DIR}`);
  }

  const manifestPaths = findFilesRecursively(SRC_DIR, (filePath) =>
    filePath.endsWith(".ai.json"),
  );

  return manifestPaths.map((manifestPath) => {
    const manifest = readManifest(manifestPath);
    const sourcePath = resolveManifestSource(manifestPath, manifest);

    return {
      manifest,
      manifestPath,
      sourcePath,
    };
  });
}

function readManifest(manifestPath: string): ResourceManifest {
  let value: unknown;

  try {
    value = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (error) {
    throw new Error(
      `Не удалось прочитать ${toGuiRelativePath(manifestPath)}: ` +
        getErrorMessage(error),
    );
  }

  validateManifestShape(value, manifestPath);

  return value;
}

function validateManifestShape(
  value: unknown,
  manifestPath: string,
): asserts value is ResourceManifest {
  const file = toGuiRelativePath(manifestPath);

  if (!isRecord(value)) {
    throw new Error(`${file}: манифест должен быть JSON-объектом`);
  }

  if (!isNonEmptyString(value.name)) {
    throw new Error(`${file}: поле "name" обязательно`);
  }

  if (
    !isNonEmptyString(value.kind) ||
    !RESOURCE_KINDS.includes(value.kind as ResourceKind)
  ) {
    throw new Error(
      `${file}: "kind" должен быть одним из: ${RESOURCE_KINDS.join(", ")}`,
    );
  }

  if (!isNonEmptyString(value.description)) {
    throw new Error(`${file}: поле "description" обязательно`);
  }

  validateOptionalString(value.source, "source", file);
  validateOptionalString(value.example, "example", file);
  validateOptionalStringArray(value.keywords, "keywords", file);
  validateOptionalStringArray(value.useWhen, "useWhen", file);
  validateOptionalStringArray(value.rules, "rules", file);
  validateOptionalStringArray(value.alternatives, "alternatives", file);
}

function resolveManifestSource(
  manifestPath: string,
  manifest: ResourceManifest,
): string {
  const directory = path.dirname(manifestPath);

  if (manifest.source) {
    const explicitSource = path.resolve(directory, manifest.source);

    if (!isFile(explicitSource)) {
      throw new Error(
        `${toGuiRelativePath(manifestPath)}: не найден source ` +
          `"${manifest.source}"`,
      );
    }

    return explicitSource;
  }

  const baseName = path.basename(manifestPath, ".ai.json");

  for (const extension of SOURCE_EXTENSIONS) {
    const candidate = path.join(directory, `${baseName}${extension}`);

    if (isFile(candidate)) {
      return candidate;
    }
  }

  /*
   * Удобный fallback для структуры:
   *
   * Button/
   *   Button.vue
   *   manifest.ai.json
   */
  const sameNameCandidates = SOURCE_EXTENSIONS.map((extension) =>
    path.join(directory, `${manifest.name}${extension}`),
  );

  for (const candidate of sameNameCandidates) {
    if (isFile(candidate)) {
      return candidate;
    }
  }

  throw new Error(
    `${toGuiRelativePath(manifestPath)}: исходник не найден. ` +
      'Укажи поле "source" или положи манифест рядом с одноимённым файлом.',
  );
}

function extractVueComponentApi(componentPath: string): CompactComponentApi {
  if (!componentPath.endsWith(".vue")) {
    throw new Error(
      `Компонент должен ссылаться на .vue-файл: ${toGuiRelativePath(
        componentPath,
      )}`,
    );
  }

  const checker = getVueMetaChecker();
  const meta = checker.getComponentMeta(componentPath);

  return {
    props: meta.props
      .filter((prop) => !prop.global)
      .map((prop) =>
        removeUndefinedValues({
          name: prop.name,
          type: prop.type,
          required: prop.required,
          default: normalizeMetaValue(prop.default),
          description: normalizeMetaValue(prop.description),
        }),
      ),

    events: meta.events.map((event) =>
      removeUndefinedValues({
        name: event.name,
        type: extractMetaType(event),
        description: normalizeMetaValue(event.description),
      }),
    ),

    slots: meta.slots.map((slot) =>
      removeUndefinedValues({
        name: slot.name,
        type: extractMetaType(slot),
        description: normalizeMetaValue(slot.description),
      }),
    ),

    exposed: meta.exposed.map((item) =>
      removeUndefinedValues({
        name: item.name,
        type: extractMetaType(item),
        description: normalizeMetaValue(item.description),
      }),
    ),
  };
}

function getVueMetaChecker(): ReturnType<typeof createChecker> {
  if (vueMetaChecker) {
    return vueMetaChecker;
  }

  if (!TSCONFIG_PATH) {
    throw new Error(
      `Не найден tsconfig.json внутри ${toGuiRelativePath(GUI_ROOT)}`,
    );
  }

  vueMetaChecker = createChecker(TSCONFIG_PATH, {
    forceUseTs: true,
  });

  return vueMetaChecker;
}

function extractTypeScriptApi(resource: LoadedResource): TypeScriptApi {
  const context = getTypeScriptContext();
  const symbol = context.exports.get(resource.manifest.name);

  if (!symbol) {
    return {
      kind: resource.manifest.kind,
      declarations: extractDeclarationsFromSource(
        resource.sourcePath,
        resource.manifest.name,
      ),
    };
  }

  const resolvedSymbol =
    symbol.flags & ts.SymbolFlags.Alias
      ? context.checker.getAliasedSymbol(symbol)
      : symbol;

  const declaration =
    resolvedSymbol.valueDeclaration ?? resolvedSymbol.declarations?.[0];

  const location = declaration ?? context.entrySourceFile;

  if (
    resource.manifest.kind === "hook" ||
    resource.manifest.kind === "utility"
  ) {
    const type = context.checker.getTypeOfSymbolAtLocation(
      resolvedSymbol,
      location,
    );

    const signatures = type
      .getCallSignatures()
      .map((signature) =>
        context.checker.signatureToString(
          signature,
          location,
          ts.TypeFormatFlags.NoTruncation |
            ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope,
        ),
      );

    return removeUndefinedValues({
      kind: resource.manifest.kind,
      signatures: signatures.length ? signatures : undefined,
      type: signatures.length
        ? undefined
        : context.checker.typeToString(
            type,
            location,
            ts.TypeFormatFlags.NoTruncation,
          ),
    });
  }

  if (resource.manifest.kind === "constant") {
    const type = context.checker.getTypeOfSymbolAtLocation(
      resolvedSymbol,
      location,
    );

    return {
      kind: "constant",
      type: context.checker.typeToString(
        type,
        location,
        ts.TypeFormatFlags.NoTruncation,
      ),
    };
  }

  const declaredType = context.checker.getDeclaredTypeOfSymbol(resolvedSymbol);

  return {
    kind: "type",
    type: context.checker.typeToString(
      declaredType,
      location,
      ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.InTypeAlias,
    ),
    declarations: extractDeclarationsFromSource(
      resource.sourcePath,
      resource.manifest.name,
    ),
  };
}

function getTypeScriptContext(): TypeScriptContext {
  if (typescriptContext) {
    return typescriptContext;
  }

  if (!TSCONFIG_PATH) {
    throw new Error("Не найден tsconfig.json");
  }

  const configFile = ts.readConfigFile(TSCONFIG_PATH, ts.sys.readFile);

  if (configFile.error) {
    throw new Error(formatTsDiagnostic(configFile.error));
  }

  const parsedConfig = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(TSCONFIG_PATH),
    undefined,
    TSCONFIG_PATH,
  );

  const rootNames = Array.from(
    new Set([...parsedConfig.fileNames, ENTRY_PATH]),
  );

  const program = ts.createProgram({
    rootNames,
    options: parsedConfig.options,
    projectReferences: parsedConfig.projectReferences,
  });

  const checker = program.getTypeChecker();
  const entrySourceFile = program.getSourceFile(ENTRY_PATH);

  if (!entrySourceFile) {
    throw new Error(`TypeScript не загрузил ${ENTRY_PATH}`);
  }

  const moduleSymbol = checker.getSymbolAtLocation(entrySourceFile);

  if (!moduleSymbol) {
    throw new Error(`Не удалось получить exports из ${ENTRY_PATH}`);
  }

  const exports = new Map(
    checker
      .getExportsOfModule(moduleSymbol)
      .map((symbol) => [symbol.name, symbol]),
  );

  typescriptContext = {
    program,
    checker,
    entrySourceFile,
    exports,
  };

  return typescriptContext;
}

function collectPublicExportNames(): Set<string> {
  try {
    return new Set(getTypeScriptContext().exports.keys());
  } catch {
    return collectPublicExportsFromSyntax(ENTRY_PATH);
  }
}

function collectPublicExportsFromSyntax(
  entryPath: string,
  visited = new Set<string>(),
): Set<string> {
  const exports = new Set<string>();
  const normalizedPath = path.normalize(entryPath);

  if (visited.has(normalizedPath) || !isFile(normalizedPath)) {
    return exports;
  }

  visited.add(normalizedPath);

  const sourceText = fs.readFileSync(normalizedPath, "utf8");
  const sourceFile = ts.createSourceFile(
    normalizedPath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    getScriptKind(normalizedPath),
  );

  for (const statement of sourceFile.statements) {
    if (ts.isExportDeclaration(statement)) {
      if (statement.exportClause && ts.isNamedExports(statement.exportClause)) {
        for (const element of statement.exportClause.elements) {
          exports.add(element.name.text);
        }
      }

      if (
        statement.moduleSpecifier &&
        ts.isStringLiteral(statement.moduleSpecifier)
      ) {
        const nestedModule = resolveLocalModule(
          normalizedPath,
          statement.moduleSpecifier.text,
        );

        if (nestedModule) {
          const nestedExports = collectPublicExportsFromSyntax(
            nestedModule,
            visited,
          );

          for (const exportName of nestedExports) {
            exports.add(exportName);
          }
        }
      }

      continue;
    }

    if (!hasExportModifier(statement)) {
      continue;
    }

    collectStatementNames(statement, exports);
  }

  return exports;
}

function validateDuplicateNames(
  resources: LoadedResource[],
  errors: ValidationIssue[],
): void {
  const grouped = new Map<string, LoadedResource[]>();

  for (const resource of resources) {
    const items = grouped.get(resource.manifest.name) ?? [];
    items.push(resource);
    grouped.set(resource.manifest.name, items);
  }

  for (const [name, items] of grouped) {
    if (items.length < 2) {
      continue;
    }

    errors.push({
      resource: name,
      message:
        `Найдено несколько манифестов: ` +
        items
          .map(({ manifestPath }) => toGuiRelativePath(manifestPath))
          .join(", "),
    });
  }
}

function validatePublicExports(
  resources: LoadedResource[],
  errors: ValidationIssue[],
  warnings: ValidationIssue[],
): void {
  let publicExports: Set<string>;

  try {
    publicExports = collectPublicExportNames();
  } catch (error) {
    warnings.push({
      message:
        "Не удалось полностью проверить src/index.ts: " +
        getErrorMessage(error),
    });
    return;
  }

  for (const resource of resources) {
    if (!publicExports.has(resource.manifest.name)) {
      errors.push({
        resource: resource.manifest.name,
        file: toGuiRelativePath(resource.manifestPath),
        message:
          `"${resource.manifest.name}" не экспортируется ` + "из src/index.ts",
      });
    }
  }
}

function validateExtractedApis(
  resources: LoadedResource[],
  errors: ValidationIssue[],
): void {
  for (const resource of resources) {
    try {
      if (resource.manifest.kind === "component") {
        extractVueComponentApi(resource.sourcePath);
      } else {
        extractTypeScriptApi(resource);
      }
    } catch (error) {
      errors.push({
        resource: resource.manifest.name,
        file: toGuiRelativePath(resource.sourcePath),
        message: `Не удалось извлечь API: ${getErrorMessage(error)}`,
      });
    }
  }
}

function calculateSearchScore(
  manifest: ResourceManifest,
  queryTokens: string[],
): number {
  const name = normalizeText(manifest.name);
  const description = normalizeText(manifest.description);
  const keywords = (manifest.keywords ?? []).map(normalizeText);
  const useWhen = (manifest.useWhen ?? []).map(normalizeText);
  const rules = (manifest.rules ?? []).map(normalizeText);
  const alternatives = (manifest.alternatives ?? []).map(normalizeText);

  let score = 0;

  for (const token of queryTokens) {
    if (name === token) {
      score += 30;
    } else if (name.includes(token)) {
      score += 16;
    }

    if (keywords.some((keyword) => keyword === token)) {
      score += 14;
    } else if (keywords.some((keyword) => keyword.includes(token))) {
      score += 9;
    }

    if (description.includes(token)) {
      score += 7;
    }

    if (useWhen.some((value) => value.includes(token))) {
      score += 5;
    }

    if (alternatives.some((value) => value.includes(token))) {
      score += 3;
    }

    if (rules.some((value) => value.includes(token))) {
      score += 1;
    }
  }

  const normalizedQuery = normalizeText(queryTokens.join(" "));

  if (normalizedQuery && description.includes(normalizedQuery)) {
    score += 12;
  }

  return score;
}

function findResource(
  resources: LoadedResource[],
  name: string,
): LoadedResource | undefined {
  const normalizedName = normalizeText(name);

  return resources.find(
    ({ manifest }) => normalizeText(manifest.name) === normalizedName,
  );
}

function parseCliArguments(args: string[]): {
  command?: string;
  positionals: string[];
  options: CliOptions;
} {
  const command = args[0];
  const positionals: string[] = [];

  const options: CliOptions = {
    limit: 10,
    compact: false,
  };

  for (let index = 1; index < args.length; index += 1) {
    const argument = args[index];

    if (argument === "--compact") {
      options.compact = true;
      continue;
    }

    if (argument === "--kind" || argument === "-k") {
      const value = args[index + 1];

      if (!value) {
        throw new Error(`${argument} требует значение`);
      }

      options.kinds = parseKinds(value);
      index += 1;
      continue;
    }

    if (argument.startsWith("--kind=")) {
      options.kinds = parseKinds(argument.slice("--kind=".length));
      continue;
    }

    if (argument === "--limit" || argument === "-l") {
      const value = args[index + 1];

      if (!value) {
        throw new Error(`${argument} требует значение`);
      }

      options.limit = parseLimit(value);
      index += 1;
      continue;
    }

    if (argument.startsWith("--limit=")) {
      options.limit = parseLimit(argument.slice("--limit=".length));
      continue;
    }

    if (argument.startsWith("-")) {
      throw new Error(`Неизвестный аргумент: ${argument}`);
    }

    positionals.push(argument);
  }

  return {
    command,
    positionals,
    options,
  };
}

function parseKinds(value: string): ResourceKind[] {
  const kinds = value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  for (const kind of kinds) {
    if (!RESOURCE_KINDS.includes(kind as ResourceKind)) {
      throw new Error(
        `Неизвестный kind "${kind}". Допустимо: ` + RESOURCE_KINDS.join(", "),
      );
    }
  }

  return kinds as ResourceKind[];
}

function parseLimit(value: string): number {
  const limit = Number.parseInt(value, 10);

  if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
    throw new Error("--limit должен быть числом от 1 до 100");
  }

  return limit;
}

function printHelp(): void {
  process.stdout.write(
    `
GUI AI CLI

Использование:
  ts-node apps/gui/src/ai/index.ts <command> [arguments]

Команды:
  search <query>        Найти подходящие ресурсы
  get <name>            Получить манифест и извлечённый API
  list                  Показать короткий список ресурсов
  validate              Проверить манифесты и публичные exports
  help                  Показать справку

Опции:
  --kind, -k <kinds>    component,hook,utility,constant,type
  --limit, -l <number>  Максимум результатов поиска, по умолчанию 10
  --compact             Вывести JSON без форматирования

Примеры:
  ts-node apps/gui/src/ai/index.ts search "кнопка сохранения"
  ts-node apps/gui/src/ai/index.ts search "работа с датами" --kind utility,hook
  ts-node apps/gui/src/ai/index.ts get Button
  ts-node apps/gui/src/ai/index.ts list --kind component
  ts-node apps/gui/src/ai/index.ts validate
`.trimStart(),
  );
}

function findFilesRecursively(
  directory: string,
  predicate: (filePath: string) => boolean,
): string[] {
  const result: string[] = [];

  for (const entry of fs.readdirSync(directory, {
    withFileTypes: true,
  })) {
    if (
      entry.name === "node_modules" ||
      entry.name === "dist" ||
      entry.name.startsWith(".")
    ) {
      continue;
    }

    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      result.push(...findFilesRecursively(entryPath, predicate));
      continue;
    }

    if (entry.isFile() && predicate(entryPath)) {
      result.push(entryPath);
    }
  }

  return result.sort();
}

function resolveLocalModule(
  parentFile: string,
  moduleSpecifier: string,
): string | undefined {
  if (!moduleSpecifier.startsWith(".")) {
    return undefined;
  }

  const basePath = path.resolve(path.dirname(parentFile), moduleSpecifier);

  const candidates = [
    basePath,
    `${basePath}.ts`,
    `${basePath}.tsx`,
    `${basePath}.js`,
    `${basePath}.jsx`,
    path.join(basePath, "index.ts"),
    path.join(basePath, "index.tsx"),
    path.join(basePath, "index.js"),
    path.join(basePath, "index.jsx"),
  ];

  return candidates.find(isFile);
}

function extractDeclarationsFromSource(
  sourcePath: string,
  exportName: string,
): string[] | undefined {
  if (!/\.[cm]?[jt]sx?$/.test(sourcePath)) {
    return undefined;
  }

  const sourceText = fs.readFileSync(sourcePath, "utf8");
  const sourceFile = ts.createSourceFile(
    sourcePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    getScriptKind(sourcePath),
  );

  const declarations: string[] = [];

  for (const statement of sourceFile.statements) {
    const names = new Set<string>();
    collectStatementNames(statement, names);

    if (names.has(exportName)) {
      declarations.push(statement.getText(sourceFile));
    }
  }

  return declarations.length ? declarations : undefined;
}

function collectStatementNames(
  statement: ts.Statement,
  result: Set<string>,
): void {
  if (
    ts.isFunctionDeclaration(statement) ||
    ts.isClassDeclaration(statement) ||
    ts.isInterfaceDeclaration(statement) ||
    ts.isTypeAliasDeclaration(statement) ||
    ts.isEnumDeclaration(statement)
  ) {
    if (statement.name) {
      result.add(statement.name.text);
    }

    return;
  }

  if (ts.isVariableStatement(statement)) {
    for (const declaration of statement.declarationList.declarations) {
      collectBindingNames(declaration.name, result);
    }
  }
}

function collectBindingNames(name: ts.BindingName, result: Set<string>): void {
  if (ts.isIdentifier(name)) {
    result.add(name.text);
    return;
  }

  for (const element of name.elements) {
    if (!ts.isOmittedExpression(element)) {
      collectBindingNames(element.name, result);
    }
  }
}

function hasExportModifier(node: ts.Node): boolean {
  return (
    ts.canHaveModifiers(node) &&
    Boolean(
      ts
        .getModifiers(node)
        ?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword),
    )
  );
}

function getScriptKind(filePath: string): ts.ScriptKind {
  if (filePath.endsWith(".tsx")) {
    return ts.ScriptKind.TSX;
  }

  if (filePath.endsWith(".jsx")) {
    return ts.ScriptKind.JSX;
  }

  if (filePath.endsWith(".js")) {
    return ts.ScriptKind.JS;
  }

  return ts.ScriptKind.TS;
}

function extractMetaType(value: unknown): string | undefined {
  if (!isRecord(value)) {
    return undefined;
  }

  if (typeof value.type === "string") {
    return value.type;
  }

  if (typeof value.signature === "string") {
    return value.signature;
  }

  if (value.schema !== undefined) {
    return stringifyCompact(value.schema);
  }

  return undefined;
}

function normalizeMetaValue(value: unknown): string | undefined {
  if (typeof value === "string") {
    return value.trim() || undefined;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (value !== undefined && value !== null) {
    return stringifyCompact(value);
  }

  return undefined;
}

function stringifyCompact(value: unknown): string | undefined {
  try {
    return JSON.stringify(value);
  } catch {
    return undefined;
  }
}

function removeUndefinedValues<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== undefined),
  ) as T;
}

function compareSearchResults(left: SearchResult, right: SearchResult): number {
  return right.score - left.score || left.name.localeCompare(right.name);
}

function tokenize(value: string): string[] {
  return Array.from(
    new Set(
      normalizeText(value)
        .split(/\s+/)
        .filter((token) => token.length >= 2),
    ),
  );
}

function normalizeText(value: string): string {
  return value
    .toLocaleLowerCase("ru-RU")
    .replace(/([a-zа-яё0-9])([A-ZА-ЯЁ])/g, "$1 $2")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function matchesKind(
  kind: ResourceKind,
  kinds: ResourceKind[] | undefined,
): boolean {
  return !kinds?.length || kinds.includes(kind);
}

function shouldRequireManifest(exportName: string): boolean {
  return !["default"].includes(exportName);
}

function printJson(value: unknown, compact: boolean): void {
  process.stdout.write(
    JSON.stringify(value, null, compact ? undefined : 2) + "\n",
  );
}

function validateOptionalString(
  value: unknown,
  field: string,
  file: string,
): void {
  if (value !== undefined && !isNonEmptyString(value)) {
    throw new Error(`${file}: поле "${field}" должно быть непустой строкой`);
  }
}

function validateOptionalStringArray(
  value: unknown,
  field: string,
  file: string,
): void {
  if (value === undefined) {
    return;
  }

  if (!Array.isArray(value) || value.some((item) => !isNonEmptyString(item))) {
    throw new Error(`${file}: поле "${field}" должно быть массивом строк`);
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isFile(filePath: string): boolean {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

function findFirstExistingFile(candidates: string[]): string | undefined {
  return candidates.find(isFile);
}

function toGuiRelativePath(filePath: string): string {
  return path.relative(GUI_ROOT, filePath).split(path.sep).join("/");
}

function formatTsDiagnostic(diagnostic: ts.Diagnostic): string {
  return ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

main().catch((error: unknown) => {
  process.stderr.write(
    JSON.stringify(
      {
        error: getErrorMessage(error),
      },
      null,
      2,
    ) + "\n",
  );

  process.exitCode = 1;
});
