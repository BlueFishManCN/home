<template>
    <div class="about">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <el-timeline>
                    <el-timeline-item timestamp="RIGHT NOW" placement="top">
                        <el-card>
                            <h3>
                                I am a postgraduate studying Computer Science at the School of Computer Engineering and
                                Science, Shanghai University.
                            </h3>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2017.9 - RIGHT NOW" placement="top">
                        <el-card>
                            <img v-if="isPhone" width="20%" src="../assets/about/SHU.png">
                            <img v-else width="6%" src="../assets/about/SHU.png">
                            <h4>Master's degree, Computer Science, Shanghai University</h4>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="2013.9 - 2017.6" placement="top">
                        <el-card>
                            <img v-if="isPhone" width="25%" src="../assets/about/JUST.jpeg">
                            <img v-else width="8%" src="../assets/about/JUST.jpeg">
                            <h4> Bachelor's degree, Computer Science, Jiangsu University of Science and Technology</h4>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="LONG LONG AGO" placement="top">
                        <el-card>
                            <h1>Fin</h1>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'about',

        data() {
            return {
                isPhone: false,
            };
        },

        created() {
            this._browserRedirect()
        },

        methods: {
            _browserRedirect() {
                let sUserAgent = navigator.userAgent.toLowerCase()
//输出：sUserAgent mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko) version/9.0 mobile/13b143 safari/601.1
                let bIsIpad = sUserAgent.match(/ipad/i) || false
                let bIsIphoneOs = sUserAgent.match(/iphone/i) || false
                let bIsMidp = sUserAgent.match(/midp/i) || false
                let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) || false
                let bIsUc = sUserAgent.match(/ucweb/i) || false
                let bIsAndroid = sUserAgent.match(/android/i) || false
                let bIsCE = sUserAgent.match(/windows ce/i) || false
                let bIsWM = sUserAgent.match(/windows mobile/i) || false
                if (bIsIpad[0] || bIsIphoneOs[0] || bIsMidp[0] || bIsUc7[0] || bIsUc[0] || bIsAndroid[0] || bIsCE[0] || bIsWM[0]) {
                    this.isPhone = true;
                }
            }
        }
    }
</script>