<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="Deep learning paper" name="1">
                        <h4><i class="el-icon-arrow-left"></i>Prediction of Sea Surface Temperature Using GRU
                            Encoder-Decoder with Attention Mechanism<i class="el-icon-arrow-right"></i>
                        </h4>
                        <div>
                            <el-tag type="danger">Status: Posting</el-tag>
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