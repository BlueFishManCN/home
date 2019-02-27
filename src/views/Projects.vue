<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="Paper submission website" name="1">
                        <h4><i class="el-icon-arrow-left"></i>2018 International Conference on Global Economy &
                            Governance (GEG2018) official paper submission website<i class="el-icon-arrow-right"></i>
                        </h4>
                        <el-carousel indicator-position="outside" height="200px">
                            <el-carousel-item>
                                <img height="100%" src="../assets/geg2018/geg1.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/geg2018/geg2.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/geg2018/geg3.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/geg2018/geg4.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/geg2018/geg5.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/geg2018/geg6.png">
                            </el-carousel-item>
                        </el-carousel>
                        <div>Tools & Technologies: CodeIgniter, Vue.js, Material Design</div>
                        <el-tooltip class="item" effect="light" content="MORE" placement="top-start">
                            <el-button icon="el-icon-search" circle v-on:click="more(1)"></el-button>
                        </el-tooltip>
                    </el-collapse-item>
                    <el-collapse-item title="Dentist appointment platform" name="2">
                        <h4><i class="el-icon-arrow-left"></i>Good Dentist Appointment Platform<i
                                class="el-icon-arrow-right"></i></h4>
                        <el-carousel indicator-position="outside" height="200px">
                            <el-carousel-item>
                                <img height="100%" src="../assets/dentist/dentist1.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/dentist/dentist2.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/dentist/dentist4.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/dentist/dentist5.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/dentist/dentist6.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/dentist/dentist7.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/dentist/dentist8.png">
                            </el-carousel-item>
                        </el-carousel>
                        <div>Tools & Technologies: CodeIgniter, Vue.js, Element-UI</div>
                        <el-tooltip class="item" effect="light" content="MORE" placement="top-start">
                            <el-button icon="el-icon-search" circle v-on:click="more(2)"></el-button>
                        </el-tooltip>
                    </el-collapse-item>
                    <el-collapse-item title="Indie game" name="3">
                        <h4><i class="el-icon-arrow-left"></i>MySpirit<i class="el-icon-arrow-right"></i></h4>
                        <el-carousel indicator-position="outside" height="200px">
                            <el-carousel-item>
                                <img height="100%" src="../assets/spirit/poster1.jpg">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/spirit/poster2.jpg">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/spirit/poster3.jpg">
                            </el-carousel-item>
                        </el-carousel>
                        <div>Tools & Technologies: Game Design, Unity</div>
                        <el-tooltip class="item" effect="light" content="MORE" placement="top-start">
                            <el-button icon="el-icon-search" circle v-on:click="more(3)"></el-button>
                        </el-tooltip>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
        </el-row>

    </div>
</template>


<script>
    export default {
        name: 'projects',
        data() {
            return {
                activeName: '0'
            };
        },
        methods: {
            more(id) {
                if (id === 1) {
                    window.location.href = "https://zhangjiyuan.cn/conference";
                } else if (id === 2) {
                    window.location.href = "https://zhangjiyuan.cn/dentist";
                } else if (id === 3) {
                    this.$router.push('/spirit');
                }
            },
        }
    }
</script>