<template>
    <div class="papers">
        <div class="page-header">
            <h1 class="page-title">{{ t.title }}</h1>
            <p class="page-desc">{{ t.desc }}</p>
        </div>
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <el-timeline>
                    <el-timeline-item timestamp="2021" placement="top">
                        <el-card>
                            <h3>
                                An Evolving Sea Surface Temperature Predicting Method Based on Multidimensional
                                Spatiotemporal Influences
                                <router-link to="/cgmp"><i class="el-icon-view"></i></router-link>
                            </h3>
                            <div>Authors: Jiang Xie, Jiaming Ouyang, Me(Jiyuan Zhang), Baogang Jin, Suixiang Shi, Lingyu Xu</div>
                            <div>IEEE Geoscience and Remote Sensing Letters, Vol. 19, pp. 1–5, 2021</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2019" placement="top">
                        <el-card>
                            <h3>
                                An Adaptive Scale Sea Surface Temperature Predicting Method Based on Deep Learning with
                                Attention Mechanism
                                <router-link to="/ged"><i class="el-icon-view"></i></router-link>
                            </h3>
                            <div>Authors: Jiang Xie, Me(Jiyuan Zhang), Jie Yu, Lingyu Xu</div>
                            <div>IEEE Geoscience and Remote Sensing Letters, Vol. 17, No. 5, pp. 740–744, 2019</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2017" placement="top">
                        <el-card>
                            <h3>
                                A Novel Hybrid Subset-Learning Method for Predicting Risk Factors of Atherosclerosis
                                <el-link type="primary" :underline="false"
                                         href="https://ieeexplore.ieee.org/abstract/document/8217987"
                                         target="_blank"><i class="el-icon-view"></i></el-link>
                            </h3>
                            <div>Authors: Jiang Xie, Haitao Wang, Me(Jiyuan Zhang), Chao Meng, Yanyan Kong, Shanping Mao, Lingyu Xu, Wu Zhang</div>
                            <div>2017 IEEE International Conference on Bioinformatics and Biomedicine (BIBM), pp. 2124–2131, 2017</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2015" placement="top">
                        <el-card>
                            <h3>旅行商问题的动态规划与子集编码求解法的研究与实现
                                <el-link type="primary" :underline="false"
                                         href="http://xueshu.baidu.com/usercenter/paper/show?paperid=e7796a4b3e6204779335213896ee4b6b&site=xueshu_se&hitarticle=1"
                                         target="_blank">
                                    <i class="el-icon-view"></i></el-link>
                            </h3>
                            <div>Authors: 吴陈, 我(Jiyuan Zhang), 王绍雷</div>
                            <div>信息与电脑: 理论版, 第18期, pp. 49–52, 2015</div>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'papers',

        computed: {
            t() {
                const i18n = {
                    en: {
                        title: 'Publications',
                        desc: 'Peer-reviewed research in deep learning, remote sensing, and bioinformatics'
                    },
                    zh: {
                        title: '论文',
                        desc: '深度学习、遥感与生物信息学领域的同行评审研究'
                    }
                };
                return i18n[this.$store.state.lang];
            }
        }
    }
</script>

<style scoped>
    .papers {
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
</style>