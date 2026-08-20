<script setup lang="ts">
import { computed, type Component } from "vue";
import {
  MorphIcon as VueMorphIcon,
  type IconInput,
  type IconNode,
  type MorphOptions,
  type ReducedMotionMode,
  type SpringPreset,
} from "morphicons/vue";

type GuiIconInput = IconInput | Component;
type MutableIconNode = [string, Record<string, IconNodeAttributeValue>][];

export interface MorphIconProps {
  icon?: GuiIconInput;
  from?: GuiIconInput;
  to?: GuiIconInput;
  progress?: number;
  spring?: SpringPreset | MorphOptions;
  reducedMotion?: ReducedMotionMode;
  size?: string | number;
  color?: string;
  strokeWidth?: string | number;
  absoluteStrokeWidth?: boolean;
  label?: string;
}

type IconNodeAttributeValue = string | number | undefined;

const SUPPORTED_SHAPES = new Set([
  "path",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "ellipse",
]);

const props = defineProps<MorphIconProps>();

const guiIconCache = new WeakMap<object, IconInput>();

const iconInput = computed(() => resolveGuiIcon(props.icon));
const fromInput = computed(() => resolveGuiIcon(props.from));
const toInput = computed(() => resolveGuiIcon(props.to));

function resolveGuiIcon(icon?: GuiIconInput): IconInput | undefined {
  if (icon == null) {
    return undefined;
  }

  if (typeof icon === "string" || Array.isArray(icon)) {
    return icon;
  }

  if (typeof icon !== "object" || !("render" in icon)) {
    return undefined;
  }

  if (typeof icon.render !== "function") {
    return undefined;
  }

  const iconCache = guiIconCache.get(icon);
  if (iconCache !== undefined) {
    return iconCache;
  }

  const resolved = parseGuiIconRender(icon.render.toString());
  if (resolved === undefined) {
    return undefined;
  }

  guiIconCache.set(icon, resolved);

  return resolved;
}

function parseGuiIconRender(renderCode: string): IconInput | undefined {
  const iconNode = parseIconNodeFromRenderCode(renderCode);
  return iconNode.length ? iconNode : undefined;
}

function parseIconNodeFromRenderCode(renderCode: string): IconNode {
  const iconNode: MutableIconNode = [];
  const nodeCallRegex = /(\w+)\(\s*["']([a-z]+)["']\s*,\s*(\{)/g;
  let match: RegExpExecArray | null;

  while ((match = nodeCallRegex.exec(renderCode)) !== null) {
    const tag = match[2];

    if (tag === undefined || !SUPPORTED_SHAPES.has(tag)) {
      continue;
    }

    const objectStart = match.index + match[0].lastIndexOf("{");
    const objectSource = getBalancedObject(renderCode, objectStart);

    if (!objectSource) {
      continue;
    }

    const attrs = parseIconNodeAttributes(objectSource);
    if (!attrs) {
      continue;
    }

    iconNode.push([tag, attrs]);
  }

  return iconNode as IconNode;
}

function parseIconNodeAttributes(
  objectSource: string,
): Record<string, IconNodeAttributeValue> | undefined {
  let parsedObject: Record<string, unknown>;
  try {
    parsedObject = new Function(`return ${objectSource}`)();
  } catch {
    return undefined;
  }

  if (!parsedObject || Array.isArray(parsedObject)) {
    return undefined;
  }

  const attrs: Record<string, IconNodeAttributeValue> = {};

  for (const [key, value] of Object.entries(parsedObject)) {
    if (typeof value === "string" || typeof value === "number") {
      attrs[key] = value;
      continue;
    }

    if (typeof value === "boolean") {
      attrs[key] = value ? 1 : 0;
    }
  }

  return Object.keys(attrs).length ? attrs : undefined;
}

function getBalancedObject(
  source: string,
  startIndex: number,
): string | undefined {
  let depth = 0;
  let inString = false;
  let stringChar = "";
  let escaped = false;

  for (let i = startIndex; i < source.length; i += 1) {
    const char = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }

      if (char === "\\") {
        escaped = true;
        continue;
      }

      if (char === stringChar) {
        inString = false;
      }

      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      stringChar = char;
      continue;
    }

    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(startIndex, i + 1);
      }
    }
  }

  return undefined;
}
</script>

<template>
  <VueMorphIcon
    v-bind="$attrs"
    :icon="iconInput"
    :from="fromInput"
    :to="toInput"
    :progress="props.progress"
    :spring="props.spring"
    :reduced-motion="props.reducedMotion"
    :size="props.size"
    :color="props.color"
    :stroke-width="props.strokeWidth"
    :absolute-stroke-width="props.absoluteStrokeWidth"
    :label="props.label"
  />
</template>
