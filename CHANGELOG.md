# Changelog

All notable changes to this project are recorded here.

## [Unreleased]

## [2026-03] - a9e329d
### Added
- Chinese/English language toggle in nav bar (`中 / EN`), powered by Vuex + `localStorage` persistence
- Google Scholar profile link in global footer alongside GitHub
- BIBM 2017 paper entry: "A Novel Hybrid Subset-Learning Method for Predicting Risk Factors of Atherosclerosis" (IEEE Xplore link)

### Changed
- Corrected author order for all 4 papers to match published records
- Updated all paper citations with full journal/conference details (volume, issue, pages, year)
- GED/CGMP figure width moved from inline `style="width:40%"` to scoped CSS with responsive mobile override (80% on ≤680px)
- Removed unused `screenWidth`, `screenHeight`, `url` data properties from Spirit.vue
- Fixed 2015 paper link: added `target="_blank"`
- Fixed extra leading space in About.vue Bachelor's degree entry

### i18n Coverage
- Home, Papers (header), Projects, About, Spirit: translated
- GED, CGMP, all paper titles/citations, "Jiyuan Zhang": English only

## [2025-07-10] - fcdf8a5
### Changed
- Updated site content (profile, assets)

## [2025] - Apple Design Overhaul
### Added
- Apple-style visual redesign across all pages: frosted-glass nav, dark page headers, SF Pro font stack, `#0071e3` accent, `#f5f5f7` background
- Dark hero section on Home with 3-column feature card grid
- Project docs: README.md, CLAUDE.md, CONTRIBUTING.md, CHANGELOG.md
- CGMP/GED/Spirit/Projects/About/Papers scoped Apple styles

### Changed
- Fixed grammar and spelling errors across all Vue files
- Fixed `ABSTARCT` → `ABSTRACT` in GED.vue and CGMP.vue
- Corrected copyright year to 2026
- Updated Baidu employment end date to 2026.3
- Spirit.vue: Manuscripts/Posters in a flex row; Story/Demo/Play in a flex row
- Footer: copyright + GitHub link layout

## [2025] - Career Update
- Added Baidu employment end date (2020–2026) to About page
- Updated profile information

## [2023] - Security Patches
- Bumped minimist, json5, express, qs, decode-uri-component, loader-utils, terser, shell-quote, eventsource, async, url-parse, follow-redirects (Dependabot)

## [2021] - CGMP Paper
- Added CGMP paper (`/cgmp` route): "An Evolving Sea Surface Temperature Predicting Method Based on Multidimensional Spatiotemporal Influences" (IEEE GRSL, Vol. 19, pp. 1–5)
- Added CGMP figure asset

## [2020] - GED Paper & Baidu
- Added GED paper (`/ged` route): "An Adaptive Scale Sea Surface Temperature Predicting Method Based on Deep Learning with Attention Mechanism" (IEEE GRSL, Vol. 17, No. 5, pp. 740–744)
- Updated About page with Baidu career entry (2020.6)

## [1.0.0] - 2019
- Stable release with all core pages: Home, Papers, Projects, MySpirit, About
- Migrated UI to Element UI 2.x
- Set up GitHub Pages deployment from `docs/` directory

## [0.x] - 2019 (Early Development)
- Initial project scaffolded with Vue CLI
- Added Vue Router with lazy-loading routes
- Introduced Element UI
- Added Papers page with publication list
- Added Projects timeline (SHU Bioinformatics site, GEG2018, Good Dentist, MySpirit)
- Added MySpirit showcase page (Microsoft Imagine Cup 2016, Second Prize)
- Added About page with career/education timeline and mobile detection
- Added logo GIF on Home page
