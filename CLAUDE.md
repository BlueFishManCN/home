# CLAUDE.md

This file provides context for AI assistants (Claude Code, etc.) working in this repository.

## Project Overview

Personal homepage for **Jiyuan Zhang**, a Vue 2 SPA deployed on GitHub Pages.

- Owner: Jiyuan Zhang | GitHub: [@BlueFishManCN](https://github.com/BlueFishManCN)
- Google Scholar: [Profile](https://scholar.google.com/citations?user=74MWBGoAAAAJ)
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
| `/ged` | `GED.vue` | GED paper detail (English only) |
| `/cgmp` | `CGMP.vue` | CGMP paper detail (English only) |
| `/projects` | `Projects.vue` | Projects timeline |
| `/spirit` | `Spirit.vue` | MySpirit game showcase |
| `/about` | `About.vue` | Career/education timeline |

### Store (`store.js`)

Vuex store manages the **language toggle** state:

```js
state: { lang: 'en' }  // 'en' | 'zh', persisted to localStorage
mutations: { toggleLang }
```

### i18n

Language switching is implemented without an external library. Each translatable component defines a `t` computed property returning the correct strings based on `this.$store.state.lang`. Toggle button (`中 / EN`) lives in the nav.

**Translation scope:**
- Translated: Home, Papers (headers), Projects, About, Spirit
- English only: GED, CGMP (academic content), paper titles/citations, all proper names
- "Jiyuan Zhang" is never translated

### Design System

Apple-inspired visual language:
- Background: `#f5f5f7` | Primary text: `#1d1d1f` | Secondary: `#6e6e73` | Accent: `#0071e3`
- Nav: frosted glass `rgba(22,22,23,0.82)` + `backdrop-filter: blur(20px)`
- Cards: `border-radius: 18px`, hover lift animation
- Font: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial`
- Page headers: dark gradient `#1d1d1f → #2c2c2e` with white text

Global styles in `App.vue` (no scoped). Per-component overrides use `:deep()`.

### Mobile Detection (`About.vue`)
`_browserRedirect()` checks `navigator.userAgent` to set `isPhone`, which controls image sizing.

## Coding Conventions

- Vue 2 Options API (not Composition API)
- Components use `data()`, `computed`, `methods`, `created` lifecycle hooks
- Element UI components prefixed with `el-` (e.g., `el-card`, `el-timeline`, `el-image`)
- Assets imported via `require('../assets/...')` in `data()`
- No `.env` files — no environment variables needed (fully static)
- Scoped CSS uses `:deep()` for Element UI component overrides

## Deployment

Build outputs go to `docs/` (configured in `vue.config.js`). After `npm run build`, commit and push `docs/` to `master` to deploy.

## What to Avoid

- Do not add a backend or API calls — this is intentionally a static site
- Do not upgrade to Vue 3 without explicit instruction (breaking change)
- Do not change the build output directory from `docs/` (GitHub Pages dependency)
- Do not add a test framework unless explicitly requested
- Do not translate "Jiyuan Zhang" in any language context

## Common Tasks

### Adding a new page
1. Create `src/views/NewPage.vue`
2. Add route in `src/router.js`
3. Add `router-link` in `src/App.vue` nav
4. Add nav label to the `t` computed i18n object in `App.vue`

### Updating personal info
- Career timeline: `src/views/About.vue` (update `t` computed for both `en` and `zh`)
- Papers list: `src/views/Papers.vue`
- Projects list: `src/views/Projects.vue`

### Adding paper detail page
Follow the pattern of `GED.vue` or `CGMP.vue` — include title h1, ABSTRACT h3, abstract paragraph, `el-image` for figure (CSS width, not inline), and download link.

### Adding translatable text
Add strings to both `en` and `zh` keys in the component's `t()` computed property. Reference via `{{ t.key }}` in the template.
