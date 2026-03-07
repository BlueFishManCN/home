<template>
    <div id="app">
        <nav id="nav">
            <div class="nav-inner">
                <span class="nav-brand">Jiyuan Zhang</span>
                <div class="nav-links">
                    <router-link to="/">{{ t.home }}</router-link>
                    <router-link to="/papers">{{ t.papers }}</router-link>
                    <router-link to="/ged">GED</router-link>
                    <router-link to="/cgmp">CGMP</router-link>
                    <router-link to="/projects">{{ t.projects }}</router-link>
                    <router-link to="/spirit">{{ t.spirit }}</router-link>
                    <router-link to="/about">{{ t.about }}</router-link>
                </div>
                <button class="lang-toggle" @click="toggleLang">{{ lang === 'en' ? '中' : 'EN' }}</button>
            </div>
        </nav>
        <main>
            <router-view/>
        </main>
        <footer id="footer">
            <div class="footer-inner">
                <p class="footer-copy">Copyright &copy; 2026 Jiyuan Zhang. All rights reserved.</p>
                <div class="footer-links">
                    <a href="https://github.com/BlueFishManCN" target="_blank">GitHub</a>
                    <a href="https://scholar.google.com/citations?user=74MWBGoAAAAJ" target="_blank">Google Scholar</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        lang() {
            return this.$store.state.lang;
        },
        t() {
            const i18n = {
                en: { home: 'Home', papers: 'Papers', projects: 'Projects', spirit: 'MySpirit', about: 'About' },
                zh: { home: '主页', papers: '论文', projects: '项目', spirit: '我的精灵', about: '关于' }
            };
            return i18n[this.$store.state.lang];
        }
    },
    methods: {
        toggleLang() {
            this.$store.commit('toggleLang');
        }
    }
}
</script>

<style>
    /* ── Reset ── */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: #f5f5f7;
    }

    /* ── Root ── */
    #app {
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display',
                     'Helvetica Neue', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #1d1d1f;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    /* ── Navigation ── */
    #nav {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: rgba(22, 22, 23, 0.82);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .nav-inner {
        max-width: 1080px;
        margin: 0 auto;
        padding: 0 24px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-brand {
        font-size: 15px;
        font-weight: 600;
        color: #f5f5f7;
        letter-spacing: -0.2px;
        white-space: nowrap;
    }

    .nav-links {
        display: flex;
        gap: 2px;
    }

    #nav a {
        font-size: 12px;
        font-weight: 400;
        color: rgba(245, 245, 247, 0.72);
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 6px;
        transition: color 0.2s, background 0.2s;
        letter-spacing: 0.1px;
    }

    #nav a:hover {
        color: #f5f5f7;
        background: rgba(255, 255, 255, 0.08);
    }

    #nav a.router-link-exact-active {
        color: #f5f5f7;
        font-weight: 500;
    }

    .lang-toggle {
        flex-shrink: 0;
        margin-left: 8px;
        font-size: 11px;
        font-weight: 600;
        color: rgba(245, 245, 247, 0.72);
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 6px;
        padding: 3px 9px;
        cursor: pointer;
        letter-spacing: 0.3px;
        transition: color 0.2s, background 0.2s;
        font-family: inherit;
    }

    .lang-toggle:hover {
        color: #f5f5f7;
        background: rgba(255, 255, 255, 0.14);
    }

    /* ── Main content ── */
    main {
        flex: 1;
    }

    /* ── Footer ── */
    #footer {
        background: #f5f5f7;
        border-top: 1px solid #d2d2d7;
        padding: 20px 24px;
    }

    .footer-inner {
        max-width: 1080px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 8px;
    }

    .footer-copy {
        margin: 0;
        font-size: 12px;
        color: #6e6e73;
    }

    .footer-links {
        display: flex;
        gap: 16px;
    }

    #footer a {
        font-size: 12px;
        color: #0071e3;
        text-decoration: none;
    }

    #footer a:hover {
        text-decoration: underline;
    }

    /* ── Global Typography ── */
    h1 {
        font-size: 48px;
        font-weight: 700;
        letter-spacing: -0.5px;
        color: #1d1d1f;
        line-height: 1.1;
    }

    h3 {
        font-size: 17px;
        font-weight: 600;
        color: #1d1d1f;
        letter-spacing: -0.1px;
    }

    p {
        font-size: 17px;
        line-height: 1.7;
        color: #3a3a3c;
    }

    a {
        color: #0071e3;
    }

    /* ── Element UI Overrides ── */

    /* Cards */
    .el-card {
        border: none !important;
        border-radius: 18px !important;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08) !important;
        background: #fff !important;
        transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .el-card:hover {
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13) !important;
        transform: translateY(-3px);
    }

    .el-card__body {
        padding: 28px 32px !important;
    }

    /* Timeline */
    .el-timeline-item__tail {
        border-left: 2px solid #d2d2d7 !important;
    }

    .el-timeline-item__node--normal {
        background-color: #0071e3 !important;
        border: none !important;
    }

    .el-timeline-item__timestamp {
        font-size: 12px !important;
        font-weight: 500 !important;
        color: #6e6e73 !important;
        letter-spacing: 0.3px;
    }

    .el-timeline-item__content h3 {
        margin: 0 0 8px;
        font-size: 17px;
        font-weight: 600;
        color: #1d1d1f;
    }

    .el-timeline-item__content > div {
        font-size: 13px;
        color: #6e6e73;
        line-height: 1.8;
    }

    /* Links inside El */
    .el-link.el-link--primary {
        color: #0071e3 !important;
    }

    /* Alert */
    .el-alert {
        border-radius: 10px !important;
        border: none !important;
    }

    /* Images */
    .el-image {
        border-radius: 12px;
        overflow: hidden;
    }

    /* Buttons */
    .el-button--primary.is-plain {
        color: #0071e3 !important;
        border-color: #0071e3 !important;
        background: transparent !important;
    }

    .el-button--primary.is-plain:hover {
        background: #0071e3 !important;
        color: #fff !important;
    }

    .el-button--success.is-plain {
        color: #34c759 !important;
        border-color: #34c759 !important;
        background: transparent !important;
    }

    .el-button--success.is-plain:hover {
        background: #34c759 !important;
        color: #fff !important;
    }

    .el-button {
        border-radius: 980px !important;
        font-family: inherit !important;
        font-weight: 500 !important;
        letter-spacing: -0.1px;
    }

    /* ── Layout helper ── */
    .page-wrap {
        max-width: 1080px;
        margin: 0 auto;
        padding: 60px 24px;
    }

    /* ── Mobile ── */
    @media (max-width: 680px) {
        .nav-inner {
            flex-direction: column;
            height: auto;
            padding: 10px 16px;
            gap: 6px;
        }

        .nav-links {
            flex-wrap: wrap;
            justify-content: center;
        }

        .lang-toggle {
            margin-left: 0;
        }

        h1 {
            font-size: 32px;
        }
    }
</style>
