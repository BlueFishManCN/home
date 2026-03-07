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

- Personal info / career: edit `src/views/About.vue`
- Publications: edit `src/views/Papers.vue`
- Projects: edit `src/views/Projects.vue`

### Adding a New Section

1. Create `src/views/NewSection.vue` following the existing component pattern (Options API, Element UI layout)
2. Register the route in `src/router.js`
3. Add a nav link in `src/App.vue`

### Assets

Place images in `src/assets/<section>/`. Import via `require('../assets/...')` inside the component's `data()`.

## Building & Deploying

```bash
npm run build   # outputs to docs/
git add docs/
git commit -m "update <description>"
git push origin master
```

GitHub Pages serves from the `docs/` directory automatically.

## Code Style

- Vue 2 Options API
- No TypeScript
- Use Element UI components (`el-*`) for UI consistency
- Keep components simple — no unnecessary abstractions
