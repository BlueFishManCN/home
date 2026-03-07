<template>
    <div class="about">
        <div class="page-header">
            <h1 class="page-title">{{ t.title }}</h1>
            <p class="page-desc">{{ t.sub }}</p>
        </div>
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <el-timeline>
                    <el-timeline-item timestamp="2020.6 - 2026.3" placement="top">
                        <el-card>
                            <img v-if="isPhone" width="20%" src="../assets/about/Baidu.png">
                            <img v-else width="6%" src="../assets/about/Baidu.png">
                            <h4>{{ t.baidu }}</h4>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2017.9 - 2020.4" placement="top">
                        <el-card>
                            <img v-if="isPhone" width="20%" src="../assets/about/SHU.png">
                            <img v-else width="6%" src="../assets/about/SHU.png">
                            <h4>{{ t.masters }}</h4>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2013.9 - 2017.6" placement="top">
                        <el-card>
                            <img v-if="isPhone" width="25%" src="../assets/about/JUST.jpeg">
                            <img v-else width="8%" src="../assets/about/JUST.jpeg">
                            <h4>{{ t.bachelors }}</h4>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="LONG LONG AGO" placement="top">
                        <el-card>
                            <h4>{{ t.fin }}</h4>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'about',

        data() {
            return {
                isPhone: false,
            };
        },

        computed: {
            t() {
                const i18n = {
                    en: {
                        title: 'About',
                        sub: 'Engineer · Researcher · Maker',
                        baidu: 'Ad Recommendation Algorithm Engineer',
                        masters: "Master's degree, Computer Science, Shanghai University",
                        bachelors: "Bachelor's degree, Computer Science, Jiangsu University of Science and Technology",
                        fin: 'Fin'
                    },
                    zh: {
                        title: '关于',
                        sub: '工程师 · 研究者 · 创客',
                        baidu: '广告推荐算法工程师',
                        masters: '计算机科学硕士，上海大学',
                        bachelors: '计算机科学学士，江苏科技大学',
                        fin: '结'
                    }
                };
                return i18n[this.$store.state.lang];
            }
        },

        created() {
            this._browserRedirect()
        },

        methods: {
            _browserRedirect() {
                let sUserAgent = navigator.userAgent.toLowerCase()
//输出：sUserAgent mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko) version/9.0 mobile/13b143 safari/601.1
                let bIsIpad = sUserAgent.match(/ipad/i) || false
                let bIsIphoneOs = sUserAgent.match(/iphone/i) || false
                let bIsMidp = sUserAgent.match(/midp/i) || false
                let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) || false
                let bIsUc = sUserAgent.match(/ucweb/i) || false
                let bIsAndroid = sUserAgent.match(/android/i) || false
                let bIsCE = sUserAgent.match(/windows ce/i) || false
                let bIsWM = sUserAgent.match(/windows mobile/i) || false
                if (bIsIpad[0] || bIsIphoneOs[0] || bIsMidp[0] || bIsUc7[0] || bIsUc[0] || bIsAndroid[0] || bIsCE[0] || bIsWM[0]) {
                    this.isPhone = true;
                }
            }
        }
    }
</script>

<style scoped>
    .about {
        background: #f5f5f7;
        min-height: 100vh;
    }

    .page-header {
        text-align: center;
        padding: 72px 24px 48px;
        background: linear-gradient(180deg, #1d1d1f 0%, #2c2c2e 100%);
    }

    .page-title {
        margin: 0 0 12px;
        font-size: 56px;
        font-weight: 700;
        color: #f5f5f7;
        letter-spacing: -1px;
    }

    .page-desc {
        margin: 0;
        font-size: 19px;
        color: rgba(245, 245, 247, 0.6);
        font-weight: 300;
    }

    .el-row {
        padding: 48px 0 64px;
        max-width: 860px;
        margin: 0 auto;
    }

    .about :deep(.el-card__body) h4 {
        margin: 8px 0 0;
        font-size: 15px;
        font-weight: 500;
        color: #3a3a3c;
    }

    .about :deep(.el-card__body) img {
        border-radius: 8px;
    }
</style>