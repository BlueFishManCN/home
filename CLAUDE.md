# CLAUDE.md

This file provides context for AI assistants (Claude Code, etc.) working in this repository.

## Project Overview

Personal homepage for **Jiyuan Zhang (张吉缘)**, a Vue 2 SPA deployed on GitHub Pages.

- Owner: Jiyuan Zhang | GitHub: [@BlueFishManCN](https://github.com/BlueFishManCN)
- Deployed from `docs/` directory on `master` branch

## Tech Stack

- **Vue 2** + **Vue Router 3** + **Vuex 3**
- **Element UI 2** (UI component library)
- **Vue CLI** build tool (outputs to `docs/` for GitHub Pages)
- No TypeScript — plain JavaScript throughout
- No test suite currently

## Key Commands

```bash
npm run serve   # dev server (hot-reload, localhost:8080)
npm run build   # production build -> docs/
```

## Architecture

Single `App.vue` with a top navigation bar (`#nav`) linking to all routes. All page logic lives in `src/views/`. No backend — fully static.

### Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Home.vue` | Welcome page |
| `/papers` | `Papers.vue` | Publications list |
| `/ged` | `GED.vue` | GED paper detail |
| `/cgmp` | `CGMP.vue` | CGMP paper detail |
| `/projects` | `Projects.vue` | Projects timeline |
| `/spirit` | `Spirit.vue` | MySpirit game showcase |
| `/about` | `About.vue` | Career/education timeline |

### Store (`store.js`)
Vuex store exists but is currently empty — no global state in use.

### Mobile Detection (`About.vue`)
`_browserRedirect()` checks `navigator.userAgent` to set `isPhone`, which controls image sizing. This is a manual approach; no responsive CSS framework is used.

## Coding Conventions

- Vue 2 Options API (not Composition API)
- Components use `data()`, `methods`, `created` lifecycle hooks
- Element UI components prefixed with `el-` (e.g., `el-card`, `el-timeline`, `el-image`)
- Assets imported via `require('../assets/...')` in `data()`
- No `.env` files — no environment variables needed (fully static)

## Deployment

Build outputs go to `docs/` (configured in `vue.config.js`). After `npm run build`, commit and push `docs/` to `master` to deploy.

## What to Avoid

- Do not add a backend or API calls — this is intentionally a static site
- Do not upgrade to Vue 3 without explicit instruction (breaking change)
- Do not change the build output directory from `docs/` (GitHub Pages dependency)
- Do not add a test framework unless explicitly requested

## Common Tasks

### Adding a new page
1. Create `src/views/NewPage.vue`
2. Add route in `src/router.js`
3. Add `router-link` in `src/App.vue` nav

### Updating personal info
- Career timeline: `src/views/About.vue`
- Papers list: `src/views/Papers.vue`
- Projects list: `src/views/Projects.vue`

### Adding paper detail page
Follow the pattern of `GED.vue` or `CGMP.vue` — include title, abstract paragraph, `el-image` for figure, and download link.
