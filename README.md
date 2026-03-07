# Jiyuan Zhang's Homepage

Personal portfolio and academic homepage for Jiyuan Zhang, built with Vue 2 + Element UI.

**Live site:** [https://bluefishman.cn](https://bluefishman.cn) (via GitHub Pages)

---

## Overview

This is a single-page application serving as a personal homepage. It includes:

- **Home** – Welcome page with hero section and feature cards
- **Papers** – Academic publications with full citation details
- **GED** – Paper detail: GRU Encoder-Decoder for SST prediction (2019)
- **CGMP** – Paper detail: Convolutional GRU with MLP for SST prediction (2021)
- **Projects** – Web and game development projects timeline
- **MySpirit** – Microsoft Imagine Cup 2016 game project showcase
- **About** – Career and education timeline

The site supports **Chinese / English language toggle** (persisted via `localStorage`).

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Vue 2.x |
| UI Library | Element UI 2.x |
| State Management | Vuex 3.x (lang toggle) |
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
│   │   ├── GED.vue         # GED paper detail (English only)
│   │   ├── CGMP.vue        # CGMP paper detail (English only)
│   │   ├── Projects.vue    # Projects list
│   │   ├── Spirit.vue      # MySpirit showcase
│   │   └── About.vue       # Career timeline
│   ├── App.vue             # Root component with navigation + lang toggle
│   ├── main.js             # App entry point
│   ├── router.js           # Vue Router configuration
│   └── store.js            # Vuex store (lang state)
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
- Authors: Jiang Xie, Jiaming Ouyang, Jiyuan Zhang, Baogang Jin, Suixiang Shi, Lingyu Xu
- Publication: IEEE Geoscience and Remote Sensing Letters, Vol. 19, pp. 1–5, 2021

### GED (2019)
**An Adaptive Scale Sea Surface Temperature Predicting Method Based on Deep Learning with Attention Mechanism**
- Authors: Jiang Xie, Jiyuan Zhang, Jie Yu, Lingyu Xu
- Publication: IEEE Geoscience and Remote Sensing Letters, Vol. 17, No. 5, pp. 740–744, 2019
- Datasets & Code: [Baidu Pan](https://pan.baidu.com/s/1COPo85Ldk7iZIN3FAbSetA) (password: vefk)

### BIBM (2017)
**A Novel Hybrid Subset-Learning Method for Predicting Risk Factors of Atherosclerosis**
- Authors: Jiang Xie, Haitao Wang, Jiyuan Zhang, Chao Meng, Yanyan Kong, Shanping Mao, Lingyu Xu, Wu Zhang
- Publication: 2017 IEEE International Conference on Bioinformatics and Biomedicine (BIBM), pp. 2124–2131

### TSP (2015)
**旅行商问题的动态规划与子集编码求解法的研究与实现**
- Authors: 吴陈, Jiyuan Zhang, 王绍雷
- Publication: 信息与电脑: 理论版, 第18期, pp. 49–52, 2015

## Author

**Jiyuan Zhang**
- GitHub: [@BlueFishManCN](https://github.com/BlueFishManCN)
- Google Scholar: [Profile](https://scholar.google.com/citations?user=74MWBGoAAAAJ)
- Career: Ad Recommendation Algorithm Engineer at Baidu (2020–2026)
- Education: M.S. Computer Science, Shanghai University (2017–2020)

## License

[MIT](LICENSE)
