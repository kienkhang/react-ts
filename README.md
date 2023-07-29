## Features

- Router: React router dom [in here](https://reactrouter.com/en/main)

- Global state: Recoil [in here](https://recoiljs.org/)

- Call API: Axios + React Query

  - Axios [in here](https://github.com/axios/axios)
  - React Query [in here](https://tanstack.com/query/latest/)

- Translation: React i18 next [in here](https://react.i18next.com/)

- UI Libary: Tailwind + Shadcn + Chakra UI

  - Tailwind: [in here](https://tailwindcss.com/)
  - Shadcn: [in here](https://ui.shadcn.com/)
  - Chakra UI: [in here](https://chakra-ui.com/)

- Form Validation: React Hook Form & Zod
  - React Hook Form: [in here](https://react-hook-form.com/)
  - Zod: [in here](https://zod.dev/)

## Another Features

- unplugin-auto-import [in here](https://github.com/antfu/unplugin-auto-import)

- unplugin-icons [in here](https://github.com/antfu/unplugin-icons)

- @reactuses/core [in here](https://www.reactuse.com/)

## Project structure

src folder [in here](https://github.com/kienkhang/react-ts/tree/dev/src):

- `apis` Call REST APIS
- `assets` Images, icons
- `components` React Component
- `hooks` React hooks
- `constants` Constant Data
- `locales` Internationalization
- `layouts` Based layout
- `pages` Based page
- `routers` React Router
- `styles` Css
- `types` Type, inteface, enum
- `utils` Typescript helper libraries

## Project setup and usage

Install nodeJS

**Latest node LTS version required (16)** Use node manager like **nvm** to install.

Install pnpm: [https://pnpm.io/installation](https://pnpm.io/installation)

Install dependencies:

```
pnpm install
```

```
pnpm i
```

Run development server:

```
pnpm dev
```

Build and preview built site locally:

```
pnpm preview
```

Build:

```
pnpm build
```

Lint .ts files with eslint:

```
pnpm lint
```

## Git commit specification reference

- `feat` add new functions
- `fix` Fix issues/bugs
- `perf` Optimize performance
- `style` Change the code style without affecting the running result
- `refactor` Re-factor code
- `revert` Undo changes
- `test` Test related, does not involve changes to business code
- `docs` Documentation and Annotation
- `chore` Updating dependencies/modifying scaffolding configuration, etc.
- `workflow` Work flow Improvements
- `ci` CICD
- `types` Type definition
- `wip` In development

