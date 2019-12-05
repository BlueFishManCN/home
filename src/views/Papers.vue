<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="18">

                <el-collapse v-model="activeName" accordion>

                    <el-collapse-item title="Deep learning" name="1">
                        <h4><i class="el-icon-arrow-left"></i>An Adaptive Scale Sea Surface Temperature Predicting
                            Method Based on Deep Learning with Attention Mechanism<i class="el-icon-arrow-right"></i>
                        </h4>
                        <div>
                            Authors: Me, Jiang Xie, Jie Yu, Lingyu Xu
                        </div>
                        <div>
                            Publication: IEEE Geoscience and Remote Sensing Letters(JCR Q2, CCF Class C)
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Algorithm" name="2">
                        <h4><i class="el-icon-arrow-left"></i>旅行商问题的动态规划与子集编码求解法的研究与实现<i
                                class="el-icon-arrow-right"></i>
                        </h4>
                        <div>
                            Authors: 吴陈, 我, 王绍雷
                        </div>
                        <div>
                            Publication: 信息与电脑
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: 'papers',

        data() {
            return {
                activeName: '1',
            };
        }
    }
</script>