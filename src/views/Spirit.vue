<template>
    <div class="spirit">
        <h3>Introduction</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                This is a 2d adventure/puzzle game based on a story: Jerry was born in 1949. Like most people, he leads
                an extraordinary life. However, some day he found himself has the memory of his preexistence. He thought
                that everybody has a shinny star inside our body and before we were born we were just these stars
                floating in the sky seeking for the beautiful body we desire to live in. The stars would turn to the
                soul once they found the body belong to their heart and started a journey from the spirit world to find
                the body. Fortunately, Jerry was the lucky one who was chosen. In the real world, Jerry was companied
                with his soul. There are far more challenges and puzzles waiting for them to face…
            </el-col>
        </el-row>

        <h3>Manuscripts</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-carousel v-if="!isPhone" indicator-position="outside">
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part1.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part2.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part3.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part4.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part5.jpeg">
                    </el-carousel-item>
                </el-carousel>
                <el-carousel v-else indicator-position="outside" height="200px">
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part1.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part2.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part3.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part4.jpeg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/part5.jpeg">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>

        <h3>Posters</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-carousel v-if="!isPhone" type="card" indicator-position="outside">
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/poster1.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/poster2.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/poster3.jpg">
                    </el-carousel-item>
                </el-carousel>
                <el-carousel v-else indicator-position="outside" height="200px">
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/poster1.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/poster2.jpg">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img height="100%" src="../assets/projects/spirit/poster3.jpg">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>

        <h3>Story</h3>
        <el-row type="flex" justify="center">
            <el-col :span="14">
                <iframe v-if="!isPhone" :width="screenWidth" :height="screenHeight"
                        src="//player.bilibili.com/player.html?aid=44826043&cid=78493249&page=1" scrolling="no"
                        frameborder="no"
                        allowfullscreen></iframe>
                <el-button v-if="isPhone" type="text" v-on:click="film()"><img src="../assets/projects/spirit/film.png"></el-button>
            </el-col>
        </el-row>

        <h3>Demo</h3>
        <el-row type="flex" justify="center">
            <el-col :span="14">
                <iframe v-if="!isPhone" :width="screenWidth" :height="screenHeight"
                        src="//player.bilibili.com/player.html?aid=44827264&cid=78498413&page=1" scrolling="no"
                        frameborder="no"
                        allowfullscreen></iframe>
                <el-button v-if="isPhone" type="text" v-on:click="demo()"><img src="../assets/projects/spirit/youtube.png"></el-button>
            </el-col>
        </el-row>

        <h3>Team EBM</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                EBM is short for 'Earn Big Money'! That's our biggest ambition. Actually there're more than four guys in
                our team. We have one coding peasant who is always coding and another Internet lover who is now busying
                with all kinds of exams. So this time we come to Imagine Cup 2016 as a small of our big team 'EBM', we
                named our team 'EBMx'. We choose to make games this time becasue we are crazy about games! We are new
                fresher but we have our own unique Philosophy about games. So, good luck! And btw, we are from Jiangsu
                University of Science and Technology. :）
            </el-col>
        </el-row>
        <img v-if="isPhone" width="75%" src="../assets/projects/spirit/team.jpg">
        <img v-else style="margin-top: 20px" width="40%" src="../assets/projects/spirit/team.jpg">

        <h3>Award</h3>
        <el-row type="flex" justify="center">
            <el-col :span="18">
                Second Prize, Microsoft Imagine Cup 2016 National Final, Games. May 2016.
            </el-col>
        </el-row>
        <img v-if="isPhone" width="75%" src="../assets/projects/spirit/award.jpg">
        <img v-else width="50%" src="../assets/projects/spirit/award.jpg">

        <h3>Play</h3>
        <el-row type="flex" justify="center">
            <el-col :span="14">
                <el-button type="text" v-on:click="downloadWin()"><img src="../assets/projects/spirit/microsoft.png"></el-button>
                <el-button type="text" v-on:click="downloadMac()"><img src="../assets/projects/spirit/apple.png"></el-button>
            </el-col>
        </el-row>

        <h1 style="margin-top:40px;margin-bottom: 250px">Fin</h1>
    </div>
</template>

<script>
    export default {
        name: 'spirit',
        data() {
            return {
                isPhone: false,
                screenWidth: document.body.clientWidth * 0.5,
                screenHeight: document.body.clientWidth * 0.5 * 3 / 4,
            };
        },
        methods: {
            film() {
                window.location.href = "https://www.bilibili.com/video/av44826043/";
            },
            demo() {
                window.location.href = "https://www.bilibili.com/video/av44827264/";
            },
            downloadWin() {
                this.$message('Coming Soon :)');
            },
            downloadMac() {
                this.$message({
                    message: 'Not available :(',
                    type: 'error'
                });
            },
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
    };
</script>