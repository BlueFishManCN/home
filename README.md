# Jiyuan Zhang's Homepage

Personal portfolio and academic homepage for Jiyuan Zhang (张吉缘), built with Vue 2 + Element UI.

**Live site:** [https://bluefishman.cn](https://bluefishman.cn) (via GitHub Pages)

---

## Overview

This is a single-page application serving as a personal homepage. It includes:

- **Home** – Welcome page
- **Papers** – Academic publications (IEEE GRSL, etc.)
- **GED** – Paper detail: GRU Encoder-Decoder for SST prediction (2019)
- **CGMP** – Paper detail: Convolutional GRU with MLP for SST prediction (2021)
- **Projects** – Web and game development projects
- **MySpirit** – Microsoft Imagine Cup 2016 game project showcase
- **About** – Career and education timeline

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Vue 2.x |
| UI Library | Element UI 2.x |
| State Management | Vuex 3.x |
| Routing | Vue Router 3.x |
| Build Tool | Vue CLI / Webpack |
| Deployment | GitHub Pages (`docs/` folder) |

## Project Structure

```
home/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── assets/             # Static assets (images)
│   │   ├── about/          # Institution logos (Baidu, SHU, JUST)
│   │   ├── cgmp/           # CGMP paper figure
│   │   ├── ged/            # GED paper figure
│   │   ├── home/           # Homepage logo
│   │   └── projects/spirit/ # MySpirit game screenshots
│   ├── views/
│   │   ├── Home.vue        # Welcome page
│   │   ├── Papers.vue      # Publications list
│   │   ├── GED.vue         # GED paper detail
│   │   ├── CGMP.vue        # CGMP paper detail
│   │   ├── Projects.vue    # Projects list
│   │   ├── Spirit.vue      # MySpirit showcase
│   │   └── About.vue       # Career timeline
│   ├── App.vue             # Root component with navigation
│   ├── main.js             # App entry point
│   ├── router.js           # Vue Router configuration
│   └── store.js            # Vuex store
├── docs/                   # Production build output (GitHub Pages)
├── babel.config.js
├── postcss.config.js
├── vue.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 10.x
- npm >= 6.x

### Installation

```bash
npm install
```

### Development

```bash
npm run serve
```

Starts a local dev server at `http://localhost:8080` with hot-reload.

### Production Build

```bash
npm run build
```

Outputs to the `docs/` directory (configured for GitHub Pages deployment).

## Deployment

The site deploys automatically via GitHub Pages from the `docs/` directory on the `master` branch.

To deploy a new version:

1. Run `npm run build` to generate updated files in `docs/`
2. Commit and push to `master`

## Academic Papers

### CGMP (2021)
**An Evolving Sea Surface Temperature Predicting Method Based on Multidimensional Spatiotemporal Influences**
- Authors: Jiyuan Zhang, Jiang Xie, Baogang Jin, Suixiang Shi, Lingyu Xu
- Publication: IEEE Geoscience and Remote Sensing Letters (JCR Q1, CCF Class C)

### GED (2019)
**An Adaptive Scale Sea Surface Temperature Predicting Method Based on Deep Learning with Attention Mechanism**
- Authors: Jiyuan Zhang, Jiang Xie, Jie Yu, Lingyu Xu
- Publication: IEEE Geoscience and Remote Sensing Letters (JCR Q1, CCF Class C)
- Datasets & Code: [Baidu Pan](https://pan.baidu.com/s/1COPo85Ldk7iZIN3FAbSetA) (password: vefk)

## Author

**Jiyuan Zhang (张吉缘)**
- GitHub: [@BlueFishManCN](https://github.com/BlueFishManCN)
- Career: Ad Recommendation Algorithm Engineer at Baidu (2020–2025)
- Education: M.S. Computer Science, Shanghai University (2017–2020)

## License

[MIT](LICENSE)
