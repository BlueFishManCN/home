<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <el-timeline>
                    <el-timeline-item timestamp="2020?" placement="top">
                        <el-card>
                            <h3>
                                An Evolving Sea Surface Temperature Predicting Method Based on Multidimensional
                                Spatiotemporal Influences
                                <el-link type="primary" :underline="false"
                                         href="http://biocenter.shu.edu.cn/zjy/#/cgmp"><i
                                        class="el-icon-view"></i></el-link>
                            </h3>
                            <div>Authors: Me, Jiang Xie, Baogang Jin, Suixiang Shi, and Lingyu Xu</div>
                            <div>Publication: Submitted</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2020" placement="top">
                        <el-card>
                            <h3>
                                An Adaptive Scale Sea Surface Temperature Predicting Method Based on Deep Learning with
                                Attention Mechanism
                                <el-link type="primary" :underline="false"
                                         href="http://biocenter.shu.edu.cn/zjy/#/ged"><i
                                        class="el-icon-view"></i></el-link>
                            </h3>
                            <div>Authors: Me, Jiang Xie, Jie Yu, and Lingyu Xu</div>
                            <div>Publication: IEEE Geoscience and Remote Sensing Letters(JCR Q1, CCF Class C)</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2015" placement="top">
                        <el-card>
                            <h3>旅行商问题的动态规划与子集编码求解法的研究与实现
                                <el-link type="primary" :underline="false"
                                         href="http://xueshu.baidu.com/usercenter/paper/show?paperid=e7796a4b3e6204779335213896ee4b6b&site=xueshu_se&hitarticle=1">
                                    <i class="el-icon-view"></i></el-link>
                            </h3>
                            <div>Authors: 我, 吴陈, 王绍雷</div>
                            <div>Publication: 信息与电脑</div>
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

        data() {
            return {};
        }
    }
</script>