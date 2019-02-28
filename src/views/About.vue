<template>
    <div class="about">
        <h3>ME</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                I am a postgraduate studying Computer Science at the Department of Computer Technology and Science.
            </el-col>
        </el-row>

        <h3>Awards</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-carousel v-if="!isPhone" indicator-position="outside">
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
            <el-col :span="16">
                <div id="containermap" style="width:100%; height:300px"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {};
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
        }
    }
</script>