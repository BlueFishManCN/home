<template>
    <div class="spirit">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <h1>MySpirit</h1>

                <h3>Introduction</h3>
                <p>
                    This is a 2d adventure/puzzle game based on a story: Jerry was born in 1949. Like most people,
                    he leads
                    an extraordinary life. However, some day he found himself has the memory of his preexistence. He
                    thought
                    that everybody has a shinny star inside our body and before we were born we were just these
                    stars
                    floating in the sky seeking for the beautiful body we desire to live in. The stars would turn to
                    the
                    soul once they found the body belong to their heart and started a journey from the spirit world
                    to find
                    the body. Fortunately, Jerry was the lucky one who was chosen. In the real world, Jerry was
                    companied
                    with his soul. There are far more challenges and puzzles waiting for them to face…
                </p>

                <h3>Manuscripts</h3>
                <el-image
                        style="width: 40%"
                        :src="parts[0]"
                        :preview-src-list="parts"
                        lazy>
                </el-image>

                <h3>Posters</h3>
                <el-image
                        style="width: 40%"
                        :src="posters[0]"
                        :preview-src-list="posters"
                        lazy>
                </el-image>

                <h3>Story</h3>
                <el-button type="text" v-on:click="film()"><img
                        src="../assets/projects/spirit/film.png">
                </el-button>

                <h3>Demo</h3>
                <el-button type="text" v-on:click="demo()"><img
                        src="../assets/projects/spirit/youtube.png"></el-button>


                <h3>Play</h3>
                <el-row type="flex" justify="center">
                    <el-col :span="14">
                        <el-button type="text" v-on:click="downloadWin()"><img
                                src="../assets/projects/spirit/microsoft.png">
                        </el-button>
                        <el-button type="text" v-on:click="downloadMac()"><img
                                src="../assets/projects/spirit/apple.png">
                        </el-button>
                    </el-col>
                </el-row>

                <h3>Award</h3>
                <p>
                    Second Prize, Microsoft Imagine Cup 2016 National Final, Games. May 2016.
                </p>

                <h3>Team EBM</h3>
                <p>
                    EBM is short for 'Earn Big Money'! That's our biggest ambition. Actually there're more than four
                    guys in
                    our team. We have one coding peasant who is always coding and another Internet lover who is now
                    busying
                    with all kinds of exams. So this time we come to Imagine Cup 2016 as a small of our big team
                    'EBM', we
                    named our team 'EBMx'. We choose to make games this time becasue we are crazy about games! We
                    are new
                    fresher but we have our own unique Philosophy about games. So, good luck! And btw, we are from
                    Jiangsu
                    University of Science and Technology:）
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'spirit',

        data() {
            return {
                screenWidth: document.body.clientWidth * 0.5,
                screenHeight: document.body.clientWidth * 0.5 * 3 / 4,

                url: require('../assets/projects/spirit/part1.jpeg'),

                parts: [require('../assets/projects/spirit/part1.jpeg'),
                    require('../assets/projects/spirit/part2.jpeg'),
                    require('../assets/projects/spirit/part3.jpeg'),
                    require('../assets/projects/spirit/part4.jpeg'),
                    require('../assets/projects/spirit/part5.jpeg')],

                posters: [require('../assets/projects/spirit/poster1.jpg'),
                    require('../assets/projects/spirit/poster2.jpg'),
                    require('../assets/projects/spirit/poster3.jpg')],
            };
        },

        created() {
            this._browserRedirect()
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
            }
        }
    };
</script>