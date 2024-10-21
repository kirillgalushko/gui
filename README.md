# Что такое GUI?

GUI — это минималистичная библиотека компонентов с открытым исходным кодом, предназначенная для личного использования в проектах [@kirillgalushko](https://github.com/kirillgalushko). Она построена на [Vue](https://vuejs.org/), с использованием [Vite](https://vite.dev/) для сборки и [Storybook](https://storybook.js.org/) для документирования компонентов.

## Команды

### Разработка

Для запуска сервера разработки используйте:

```bash
npm run dev
```

Для корректной работы необходимо также запустить [proxy-сервер](https://github.com/kirillgalushko/cors-proxy).

### Сборка

Для сборки проекта выполните:

```bash
npm run build
```

### Предпросмотр

Для предпросмотра собранного проекта:

```bash
npm run preview
```

### Storybook

Для запуска Storybook используйте:

```bash
npm run storybook
```

### Релиз

Для создания новой версии и автоматической отправки изменений в удаленный репозиторий используйте:

```bash
npm run release
```
