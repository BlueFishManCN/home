# Contributing

This is a personal homepage repository. Contributions are not expected from the public, but this document describes how to work on it.

## Setup

```bash
git clone https://github.com/BlueFishManCN/home.git
cd home
npm install
npm run serve
```

## Making Changes

### Content Updates

- Personal info / career: edit `src/views/About.vue` (update both `en` and `zh` keys in the `t` computed property)
- Publications: edit `src/views/Papers.vue`
- Projects: edit `src/views/Projects.vue` (update both `en` and `zh` keys for translatable labels)

### i18n — Adding or Changing Text

Each translatable component has a `t()` computed property with `en` and `zh` sub-objects. Always update **both** languages when changing UI text:

```js
computed: {
    t() {
        const i18n = {
            en: { title: 'Projects', ... },
            zh: { title: '项目', ... }
        };
        return i18n[this.$store.state.lang];
    }
}
```

Paper titles, author names, journal citations, and "Jiyuan Zhang" are never translated — keep them in English regardless of language mode.

### Adding a New Section

1. Create `src/views/NewSection.vue` following the existing component pattern (Options API, Element UI layout)
2. Register the route in `src/router.js`
3. Add a nav link in `src/App.vue` and add labels to its `t` computed i18n object

### Assets

Place images in `src/assets/<section>/`. Import via `require('../assets/...')` inside the component's `data()`.

## Building & Deploying

```bash
npm run build   # outputs to docs/
git add docs/ src/
git commit -m "update <description>"
git push origin master
```

GitHub Pages serves from the `docs/` directory automatically.

## Code Style

- Vue 2 Options API
- No TypeScript
- Use Element UI components (`el-*`) for UI consistency
- Keep components simple — no unnecessary abstractions
- Scoped styles use `:deep()` for Element UI overrides
