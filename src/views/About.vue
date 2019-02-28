<template>
    <div class="about">
        <h3>ME</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                I am a postgraduate studying Computer Science at the Department of Computer Technology and Science.
            </el-col>
        </el-row>

        <h3>Education</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                Master's degree, Computer Science, Shanghai University
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                Bachelor's degree, Computer Science, Jiangsu University of Science and Technology
            </el-col>
        </el-row>

        <h3>Awards</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-carousel v-if="!isPhone" type="card" indicator-position="outside">
                    <el-carousel-item>
                        <img height="100%" src="../assets/award.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/award1.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/award2.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/award3.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/award4.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/award5.jpg">
                    </el-carousel-item>
                </el-carousel>
                <el-carousel v-else indicator-position="outside" height="200px">
                    <el-carousel-item>
                        <img width="100%" src="../assets/award.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img width="100%" src="../assets/award1.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img width="100%" src="../assets/award2.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img width="100%" src="../assets/award3.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img width="100%" src="../assets/award4.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img width="100%" src="../assets/award5.jpg">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>

        <h3>Location</h3>
        <el-row type="flex" justify="center">
            <el-col :span="20">
                <div id="containermap" style="width:100%; height:250px"></div>
            </el-col>
        </el-row>

        <h1 style="margin-top:40px;margin-bottom: 250px">Fin</h1>
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
        mounted() {
            var map = new AMap.Map('containermap', {
                zoom: 15,//级别
                center: [121.399822, 31.317432],//中心点坐标
            });
            var marker = new AMap.Marker({
                position: [121.399822, 31.317432],//位置
                title: '上海大学计算机科学与工程学院'
            });
            map.add(marker);//添加到地图

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
        },
        created() {
            this._browserRedirect()
        }
    }
</script>