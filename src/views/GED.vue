<template>
    <div class="ged">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <h1>An Adaptive Scale Sea Surface Temperature Predicting Method Based on Deep Learning With Attention
                    Mechanism
                </h1>

                <h3>ABSTARCT</h3>
                <p>
                    Sea surface temperature (SST) prediction plays an important role in ocean-related fields. It is
                    challenging due to the nonlinear temporal dynamics with changing complex factors and the inherent
                    difficulties in long-scale predictions. Conventional models often lack efficient information
                    extraction
                    and cannot meet the requirements of long-scale predictions. Therefore, the gate recurrent unit (GRU)
                    encoder–decoder with SST codes and dynamic influence link (DIL), GRU encoder– decoder (GED), which
                    considered both the static and dynamic influence, is proposed in this letter. Each SST code,
                    capturing
                    the static information more effectively, was computed by all hidden states of the encoder and was
                    individually associated with each predicted SST. The DIL, capturing the dynamic influence, connected
                    the
                    SST code with the early predicted future SST for solving the long-scale dependence problem. GED was
                    tested on the Bohai Sea SST data sets and South China Sea SST data sets and compared with
                    full-connected
                    long-short term memory (FC-LSTM) and support vector regression. The results demonstrated that GED
                    outperformed others on different prediction scales and different prediction terms (daily, weekly,
                    and
                    monthly), especially in terms of long-scale and long-term predictions. In addition, attention
                    relationships between historical and future SSTs were further explored, and there was a meaningful
                    finding that each future daily mean SST of Bohai Sea most strongly correlated with the past 27th to
                    29th
                    historical values.
                </p>

                <el-image
                        style="width: 40%"
                        :src="urls[0]"
                        :preview-src-list="urls"
                        lazy>
                </el-image>

                <h3>PAPER</h3>
                <el-link type="primary" :underline="false"
                         href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8859">
                    download
                </el-link>


                <h3>DATASETS</h3>
                <el-link type="primary" :underline="false"
                         href="https://pan.baidu.com/s/1JUrdsMYZrYRMItN4F18xtQ">
                    download
                </el-link>


                <h3>CODES</h3>
                <el-link type="primary" :underline="false" href="">
                    download
                </el-link>


                <h3>README</h3>
                <el-link type="primary" :underline="false" href="https://pan.baidu.com/s/1Z3QDwVyRXSxjfb2NkzfiJQ">
                    download
                </el-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'ged',

        data() {
            return {
                urls: [require('../assets/ged/ged.jpg')],
            };
        }
    }
</script>