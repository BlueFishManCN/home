<template>
    <div class="home">
        <section class="hero">
            <el-image class="hero-logo" :src="url" lazy></el-image>
            <h1 class="hero-title">Jiyuan Zhang</h1>
            <p class="hero-sub">{{ t.sub }}</p>
            <div class="hero-btns">
                <el-button size="medium" type="primary" @click="$router.push('/about')">{{ t.btnAbout }}</el-button>
                <el-button size="medium" type="primary" plain @click="$router.push('/papers')">{{ t.btnPapers }}</el-button>
                <el-button size="medium" plain @click="$router.push('/projects')">{{ t.btnProjects }}</el-button>
            </div>
        </section>

        <section class="cards-section">
            <div class="card-grid">
                <div class="feature-card" @click="$router.push('/papers')">
                    <div class="feature-icon">&#128196;</div>
                    <h3>{{ t.cardPapers }}</h3>
                    <p>{{ t.descPapers }}</p>
                    <span class="card-link">{{ t.linkPapers }}</span>
                </div>
                <div class="feature-card" @click="$router.push('/projects')">
                    <div class="feature-icon">&#128187;</div>
                    <h3>{{ t.cardProjects }}</h3>
                    <p>{{ t.descProjects }}</p>
                    <span class="card-link">{{ t.linkProjects }}</span>
                </div>
                <div class="feature-card" @click="$router.push('/about')">
                    <div class="feature-icon">&#128100;</div>
                    <h3>{{ t.cardAbout }}</h3>
                    <p>{{ t.descAbout }}</p>
                    <span class="card-link">{{ t.linkAbout }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'home',

        data() {
            return {
                url: require('../assets/home/logo.gif'),
            }
        },

        computed: {
            t() {
                const i18n = {
                    en: {
                        sub: 'Algorithm Engineer \u00a0·\u00a0 Researcher \u00a0·\u00a0 Developer',
                        btnAbout: 'About Me',
                        btnPapers: 'Publications',
                        btnProjects: 'Projects',
                        cardPapers: 'Papers',
                        cardProjects: 'Projects',
                        cardAbout: 'About',
                        descPapers: 'IEEE GRSL publications on sea surface temperature prediction using deep learning.',
                        descProjects: 'Web platforms and award-winning game development projects.',
                        descAbout: "Career at Baidu, master's from Shanghai University, and more.",
                        linkPapers: 'View publications',
                        linkProjects: 'View projects',
                        linkAbout: 'Learn more'
                    },
                    zh: {
                        sub: '算法工程师 \u00a0·\u00a0 研究者 \u00a0·\u00a0 开发者',
                        btnAbout: '关于我',
                        btnPapers: '论文',
                        btnProjects: '项目',
                        cardPapers: '论文',
                        cardProjects: '项目',
                        cardAbout: '关于',
                        descPapers: 'IEEE GRSL 发表的深度学习海表温度预测研究论文。',
                        descProjects: '网页平台与获奖游戏开发项目。',
                        descAbout: '百度工作经历，上海大学硕士学位，及更多信息。',
                        linkPapers: '查看论文',
                        linkProjects: '查看项目',
                        linkAbout: '了解更多'
                    }
                };
                return i18n[this.$store.state.lang];
            }
        }
    }
</script>

<style scoped>
    .home {
        background: #f5f5f7;
    }

    /* ── Hero ── */
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 88vh;
        text-align: center;
        padding: 80px 24px 60px;
        background: linear-gradient(180deg, #000 0%, #1a1a2e 100%);
    }

    .hero-logo {
        width: 160px;
        margin-bottom: 32px;
        border-radius: 32px;
        overflow: hidden;
    }

    .hero-title {
        margin: 0 0 16px;
        font-size: 64px;
        font-weight: 700;
        color: #f5f5f7;
        letter-spacing: -1px;
        line-height: 1.05;
    }

    .hero-sub {
        margin: 0 0 40px;
        font-size: 21px;
        color: rgba(245, 245, 247, 0.6);
        letter-spacing: 0.2px;
        font-weight: 300;
    }

    .hero-btns {
        display: flex;
        gap: 14px;
        justify-content: center;
        flex-wrap: wrap;
    }

    /* Override button colors for dark hero background */
    .hero-btns .el-button--primary {
        background: #0071e3 !important;
        border-color: #0071e3 !important;
        color: #fff !important;
    }

    .hero-btns .el-button--primary:hover {
        background: #0077ed !important;
    }

    .hero-btns .el-button--primary.is-plain {
        background: transparent !important;
        border-color: rgba(255, 255, 255, 0.4) !important;
        color: #f5f5f7 !important;
    }

    .hero-btns .el-button--primary.is-plain:hover {
        background: rgba(255, 255, 255, 0.1) !important;
        border-color: rgba(255, 255, 255, 0.6) !important;
        color: #fff !important;
    }

    .hero-btns .el-button.is-plain {
        background: transparent !important;
        border-color: rgba(255, 255, 255, 0.4) !important;
        color: #f5f5f7 !important;
    }

    .hero-btns .el-button.is-plain:hover {
        background: rgba(255, 255, 255, 0.1) !important;
        border-color: rgba(255, 255, 255, 0.6) !important;
        color: #fff !important;
    }

    /* ── Feature Cards ── */
    .cards-section {
        padding: 80px 24px;
        max-width: 1080px;
        margin: 0 auto;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    .feature-card {
        background: #fff;
        border-radius: 20px;
        padding: 36px 32px;
        cursor: pointer;
        transition: box-shadow 0.3s ease, transform 0.3s ease;
        text-align: left;
    }

    .feature-card:hover {
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        transform: translateY(-4px);
    }

    .feature-icon {
        font-size: 36px;
        margin-bottom: 20px;
    }

    .feature-card h3 {
        margin: 0 0 10px;
        font-size: 20px;
        font-weight: 600;
        color: #1d1d1f;
    }

    .feature-card p {
        margin: 0 0 20px;
        font-size: 14px;
        color: #6e6e73;
        line-height: 1.6;
    }

    .card-link {
        font-size: 14px;
        color: #0071e3;
        font-weight: 500;
    }

    .card-link::after {
        content: ' →';
    }

    @media (max-width: 768px) {
        .hero-title {
            font-size: 40px;
        }

        .hero-sub {
            font-size: 17px;
        }

        .card-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
