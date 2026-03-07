<template>
    <div class="cgmp">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <h1>An Evolving Sea Surface Temperature Predicting Method Based on Multidimensional Spatiotemporal
                    Influences
                </h1>

                <h3>ABSTRACT</h3>
                <p style="text-align: justify">
                    In global climate researches, marine ecosystem researches, and ocean-related applications, it is of
                    considerable significance to accurately observe and predict Sea Surface Temperature (SST). However,
                    various physical and environmental factors affect the changes in SST, making it highly random and
                    uncertain. Therefore, it is still a challenge to propose a highly accurate SST prediction method.
                    SST prediction methods based on the temporal information usually focus on capturing the temporal
                    influence of the historical SST but ignore the spatial influence in the sea area, so these methods
                    meet the performance bottlenecks. In order to fuse the multidimensional spatiotemporal influence and
                    further improve the accuracy of the SST prediction, this paper proposed the Convolutional Gated
                    Recurrent Unit (GRU) with Multilayer Perceptron (CGMP) to predict SST in the Bohai Sea and the South
                    China Sea. The convolutional layer of CGMP can capture the neighbor influence effectively in the
                    spatial dimension, making up for the shortcomings of methods that are based on the temporal
                    information and do not consider the spatial information. The GRU layer and the multilayer perceptron
                    layer of CGMP can process historical information effectively in the temporal dimension. Experiments
                    showed that the prediction performance of CGMP was better than those of other comparison methods in
                    different sea areas, different schemas (daily mean, weekly mean, and monthly mean), and different
                    prediction scales. Besides, the error distribution law in the Bohai Sea daily mean SST prediction
                    was explored.
                </p>

                <el-image
                        :src="urls[0]"
                        :preview-src-list="urls"
                        lazy>
                </el-image>

                <h3>DATASETS|CODES|README</h3>
                <el-link type="primary" :underline="false"
                         href="https://pan.baidu.com/s/1COPo85Ldk7iZIN3FAbSetA">
                    download (password:vefk)
                </el-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'cgmp',

        data() {
            return {
                urls: [require('../assets/cgmp/cgmp.jpg')],
            };
        }
    }
</script>

<style scoped>
    .cgmp {
        background: #f5f5f7;
        min-height: 100vh;
        padding-bottom: 64px;
    }

    .cgmp :deep(.el-col) {
        text-align: left;
        padding: 60px 0;
    }

    .cgmp :deep(h1) {
        font-size: 36px;
        letter-spacing: -0.5px;
        color: #1d1d1f;
        line-height: 1.2;
        margin-bottom: 32px;
        padding-bottom: 24px;
        border-bottom: 1px solid #d2d2d7;
    }

    .cgmp :deep(h3) {
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: #6e6e73;
        margin: 36px 0 12px;
    }

    .cgmp :deep(p) {
        font-size: 16px;
        line-height: 1.75;
        color: #3a3a3c;
    }

    .cgmp :deep(.el-image) {
        display: block;
        width: 40%;
        margin: 24px auto;
        border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 680px) {
        .cgmp :deep(.el-image) {
            width: 80%;
        }
    }

    .cgmp :deep(.el-link) {
        font-size: 15px;
        font-weight: 500;
    }
</style>