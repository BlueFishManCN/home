<template>
    <div class="spirit">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <h1>MySpirit</h1>

                <h3>{{ t.secIntro }}</h3>
                <p>{{ t.intro }}</p>

                <div class="image-row">
                    <div class="image-item">
                        <h3>Manuscripts</h3>
                        <el-image
                                style="width: 100%"
                                :src="parts[0]"
                                :preview-src-list="parts"
                                lazy>
                        </el-image>
                    </div>
                    <div class="image-item">
                        <h3>Posters</h3>
                        <el-image
                                style="width: 100%"
                                :src="posters[0]"
                                :preview-src-list="posters"
                                lazy>
                        </el-image>
                    </div>
                </div>

                <div class="media-row">
                    <div class="media-item">
                        <h3>Story</h3>
                        <el-button type="text" v-on:click="film()">
                            <img src="../assets/projects/spirit/film.png">
                        </el-button>
                    </div>
                    <div class="media-item">
                        <h3>Demo</h3>
                        <el-button type="text" v-on:click="demo()">
                            <img src="../assets/projects/spirit/youtube.png">
                        </el-button>
                    </div>
                    <div class="media-item">
                        <h3>Play</h3>
                        <el-button type="text" v-on:click="downloadWin()">
                            <img src="../assets/projects/spirit/microsoft.png">
                        </el-button>
                        <el-button type="text" v-on:click="downloadMac()">
                            <img src="../assets/projects/spirit/apple.png">
                        </el-button>
                    </div>
                </div>

                <h3>{{ t.secAward }}</h3>
                <p>{{ t.award }}</p>

                <h3>Team EBM</h3>
                <p>{{ t.team }}</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'spirit',

        data() {
            return {
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

        computed: {
            t() {
                const i18n = {
                    en: {
                        secIntro: 'Introduction',
                        intro: 'This is a 2D adventure/puzzle game based on a story: Jerry was born in 1949. Like most people, he leads an extraordinary life. However, one day he found that he had the memory of his preexistence. He thought that everybody has a shiny star inside our body, and before we were born we were just these stars floating in the sky, seeking the beautiful body we desire to live in. The stars would turn into the soul once they found the body belonging to their heart, and started a journey from the spirit world to find the body. Fortunately, Jerry was the lucky one who was chosen. In the real world, Jerry was accompanied by his soul. There are far more challenges and puzzles waiting for them to face…',
                        secAward: 'Award',
                        award: 'Second Prize, Microsoft Imagine Cup 2016 National Final, Games. May 2016.',
                        team: "EBM is short for 'Earn Big Money'! That's our biggest ambition. Actually there are more than four people in our team. We have one coding enthusiast who is always coding, and another Internet lover who is now busy with all kinds of exams. So this time we come to Imagine Cup 2016 as a small part of our big team 'EBM', and named our team 'EBMx'. We chose to make games because we are crazy about them! We are newcomers but we have our own unique philosophy about games. Good luck! And btw, we are from Jiangsu University of Science and Technology :）"
                    },
                    zh: {
                        secIntro: '简介',
                        intro: '这是一款基于故事背景的 2D 冒险益智游戏：杰瑞出生于 1949 年，和大多数人一样，他过着平凡的生活。然而，某一天他突然发现自己拥有了前世的记忆。他相信，每个人体内都有一颗闪耀的星星，在我们出生之前，我们只是天空中漂浮的星星，寻找着心中渴望寄居的美丽躯体。当星星找到属于自己的躯体，便会化为灵魂，从灵魂世界踏上寻找肉体的旅程。幸运的是，杰瑞就是那个被选中的人。在现实世界里，杰瑞与他的灵魂相伴同行。还有更多的挑战与谜题等待着他们去面对……',
                        secAward: '获奖',
                        award: '2016 年 5 月，微软创新杯 2016 全国总决赛游戏类二等奖。',
                        team: 'EBM 是"赚大钱"的缩写！这是我们最大的理想。其实我们团队不止四个人，还有一个永远在敲代码的码农，和一个正在忙于各种考试的网络达人。这次我们以大团队"EBM"的一小部分身份参加创新杯 2016，取名"EBMx"。我们这次选择做游戏，是因为我们都是狂热的游戏玩家！我们是新人，但对游戏有着独到的理解。加油！顺便说一句，我们来自江苏科技大学 :）'
                    }
                };
                return i18n[this.$store.state.lang];
            }
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

<style scoped>
    .spirit {
        background: #f5f5f7;
        min-height: 100vh;
        padding-bottom: 64px;
    }

    .spirit :deep(.el-col) {
        text-align: left;
        padding: 60px 0;
    }

    .spirit :deep(h1) {
        font-size: 56px;
        letter-spacing: -1px;
        color: #1d1d1f;
        margin-bottom: 8px;
    }

    .spirit :deep(h3) {
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: #6e6e73;
        margin: 32px 0 10px;
        padding-top: 24px;
        border-top: 1px solid #d2d2d7;
    }

    .spirit :deep(p) {
        font-size: 16px;
        line-height: 1.75;
        color: #3a3a3c;
        margin-top: 0;
    }

    .spirit :deep(.el-image) {
        border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    .spirit :deep(.el-alert) {
        margin-top: 16px;
        border-radius: 12px !important;
    }

    .spirit :deep(.image-row) {
        display: flex;
        gap: 20px;
        padding-top: 24px;
        border-top: 1px solid #d2d2d7;
        margin: 32px 0;
    }

    .spirit :deep(.image-item) {
        flex: 1;
    }

    .spirit :deep(.image-item h3) {
        border-top: none !important;
        padding-top: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 12px;
    }

    .spirit :deep(.media-row) {
        display: flex;
        gap: 16px;
        padding-top: 24px;
        border-top: 1px solid #d2d2d7;
        margin: 32px 0;
        text-align: center;
    }

    .spirit :deep(.media-item) {
        flex: 1;
    }

    .spirit :deep(.media-item h3) {
        border-top: none !important;
        padding-top: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 12px;
    }

    .spirit :deep(.el-button--text) {
        padding: 0;
        border-radius: 12px !important;
    }

    .spirit :deep(.el-button--text img) {
        border-radius: 10px;
        transition: opacity 0.2s;
    }

    .spirit :deep(.el-button--text:hover img) {
        opacity: 0.7;
    }
</style>