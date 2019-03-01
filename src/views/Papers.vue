<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="18">

                <el-collapse v-model="activeName" accordion>

                    <el-collapse-item title="Deep learning" name="1">
                        <h4><i class="el-icon-arrow-left"></i>Prediction of Sea Surface Temperature Using GRU
                            Encoder-Decoder<i class="el-icon-arrow-right"></i>
                        </h4>
                        <div>
                            Authors: Jiang Xie, Me, Lingyu Xu
                        </div>
                        <div>
                            <el-tag type="danger">Status: Posting</el-tag>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Algorithm" name="2">
                        <h4><i class="el-icon-arrow-left"></i>旅行商问题的动态规划与子集编码求解法的研究与实现<i
                                class="el-icon-arrow-right"></i>
                        </h4>
                        <div>
                            Authors: 吴陈, 张吉缘, 王绍雷
                        </div>
                        <div>
                            Publication: 信息与电脑: 理论版, 2015, v18, p49
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
                activeName: '1'
            };
        },
        methods: {}
    }
</script>