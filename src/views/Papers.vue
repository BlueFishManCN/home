<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="22">

                <el-timeline>
                    <el-timeline-item timestamp="2019" placement="top">
                        <el-card>
                            <h4>
                                An Adaptive Scale Sea Surface Temperature Predicting Method Based on Deep Learning with
                                Attention Mechanism
                                <el-link type="primary" :underline="false"
                                         href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8859"><i
                                        class="el-icon-view"></i></el-link>
                            </h4>
                            <div>Authors: Me, Jiang Xie, Jie Yu, Lingyu Xu</div>
                            <div>Publication: IEEE Geoscience and Remote Sensing Letters(JCR Q2, CCF Class C)</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2015" placement="top">
                        <el-card>
                            <h4>旅行商问题的动态规划与子集编码求解法的研究与实现
                                <el-link type="primary" :underline="false"
                                         href="http://xueshu.baidu.com/usercenter/paper/show?paperid=e7796a4b3e6204779335213896ee4b6b&site=xueshu_se&hitarticle=1">
                                    <i class="el-icon-view"></i></el-link>
                            </h4>
                            <div>Authors: 吴陈, 我, 王绍雷</div>
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