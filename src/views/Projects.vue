<template>
    <div class="projects">
        <div class="page-header">
            <h1 class="page-title">{{ t.title }}</h1>
            <p class="page-desc">{{ t.desc }}</p>
        </div>
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <el-timeline>
                    <el-timeline-item timestamp="Jul 2019 - Apr 2020" placement="top">
                        <el-card>
                            <h3>Shanghai University Bioinformatics Research Group website
                                <el-link type="primary" :underline="false"
                                         href="http://biocenter.shu.edu.cn/group"><i class="el-icon-view"></i></el-link>
                            </h3>
                            <div>{{ t.creator }}(2): {{ t.me }}, Jiaming Ouyang</div>
                            <div>{{ t.tools }}: CodeIgniter, Vue.js, Element-UI</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="Jul 2018" placement="top">
                        <el-card>
                            <h3>2018 International Conference on Global Economy &amp; Governance (GEG2018) paper submission
                                website
                                <el-link type="primary" :underline="false" href="http://geg2018.shu.edu.cn"><i
                                        class="el-icon-view"></i></el-link>
                            </h3>
                            <div>{{ t.creator }}(1): {{ t.me }}</div>
                            <div>{{ t.tools }}: CodeIgniter, Vue.js, Material Design</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="Nov 2017 – Jul 2018" placement="top">
                        <el-card>
                            <h3>Good Dentist Appointment Platform
                                <el-link type="primary" :underline="false"
                                         href="http://biocenter.shu.edu.cn/dentist_proj">
                                    <i class="el-icon-view"></i></el-link>
                            </h3>
                            <div>{{ t.creator }}(4): {{ t.me }}, Jiamin Sun, Ruiying Wu, Fuzhang Yang</div>
                            <div>{{ t.tools }}: CodeIgniter, Vue.js, Element-UI</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="Dec 2015 – Apr 2016" placement="top">
                        <el-card>
                            <h3>MySpirit<router-link to="/spirit"><i class="el-icon-view"></i></router-link>
                            </h3>
                            <div>{{ t.creator }}(4)(Team EBM): {{ t.me }}, Ruizhe Hong, Kai Xie, Xiaomin Zhen</div>
                            <div>{{ t.tools }}: Unity3D</div>
                            <div>
                                <el-alert
                                        :title="t.award"
                                        type="error"
                                        center
                                        :closable=false>
                                </el-alert>
                            </div>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'projects',

        computed: {
            t() {
                const i18n = {
                    en: {
                        title: 'Projects',
                        desc: 'Web platforms, research tools, and award-winning games',
                        creator: 'Creator',
                        me: 'Me(Jiyuan Zhang)',
                        tools: 'Tools & Technologies',
                        award: 'Award: Second Prize, Microsoft Imagine Cup 2016 National Final, Games. May 2016.'
                    },
                    zh: {
                        title: '项目',
                        desc: '网页平台、研究工具与获奖游戏',
                        creator: '开发者',
                        me: '我(Jiyuan Zhang)',
                        tools: '使用技术',
                        award: '获奖：微软创新杯 2016 全国总决赛游戏类二等奖，2016年5月'
                    }
                };
                return i18n[this.$store.state.lang];
            }
        }
    }
</script>

<style scoped>
    .projects {
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