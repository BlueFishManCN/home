<template>
    <div class="cgmp">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <h1>An Evolving Sea Surface Temperature Predicting Method Based on Multidimensional Spatiotemporal
                    Influences
                </h1>

                <h3>ABSTARCT</h3>
                <p>
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
                        style="width: 40%"
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