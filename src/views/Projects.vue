<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="#0 Research group website" name="0">
                        <h4><i class="el-icon-arrow-left"></i>Shanghai University Bioinformatics Research Group
                            website<i class="el-icon-arrow-right"></i>
                        </h4>
                        <el-carousel indicator-position="outside" height="200px">
                            <el-carousel-item>
                                <img height="100%" src="../assets/projects/group/group1.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/projects/group/group2.png">
                            </el-carousel-item>
                        </el-carousel>
                        <div>Date: Jul 2019 until now</div>
                        <div>Creator(1): Me</div>
                        <div>Tools & Technologies: CodeIgniter, Vue.js, Element-UI</div>
                        <el-tooltip class="item" effect="light" content="MORE" placement="top-start">
                            <el-button icon="el-icon-search" circle v-on:click="more(0)"></el-button>
                        </el-tooltip>
                    </el-collapse-item>
                    <el-collapse-item title="#1 Paper submission website" name="1">
                        <h4><i class="el-icon-arrow-left"></i>2018 International Conference on Global Economy &
                            Governance (GEG2018) paper submission website<i class="el-icon-arrow-right"></i>
                        </h4>
                        <el-carousel indicator-position="outside" height="200px">
                            <el-carousel-item>
                                <img height="100%" src="../assets/projects/geg2018/geg1.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/projects/geg2018/geg2.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/projects/geg2018/geg3.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/projects/geg2018/geg4.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/projects/geg2018/geg5.png">
                            </el-carousel-item>
                            <el-carousel-item>
                                <img height="100%" src="../assets/projects/geg2018/geg6.png">
                            </el-carousel-item>
                        </el-carousel>
                        <div>Date: Jul 2018</div>
                        <div>Creator(1): Me</div>
                        <div>Tools & Technologies: CodeIgniter, Vue.js, Material Design</div>
                        <el-tooltip class="item" effect="light" content="MORE" placement="top-start">
                            <el-button icon="el-icon-search" circle v-on:click="more(1)"></el-button>
                        </el-tooltip>
                    </el-collapse-item>
                    <!--                    <el-collapse-item title="#2 Dentist appointment platform" name="2">-->
                    <!--                        <h4><i class="el-icon-arrow-left"></i>Good Dentist Appointment Platform<i-->
                    <!--                                class="el-icon-arrow-right"></i></h4>-->
                    <!--                        <el-carousel indicator-position="outside" height="200px">-->
                    <!--                            <el-carousel-item>-->
                    <!--                                <img height="100%" src="../assets/dentist/dentist1.png">-->
                    <!--                            </el-carousel-item>-->
                    <!--                            <el-carousel-item>-->
                    <!--                                <img height="100%" src="../assets/dentist/dentist2.png">-->
                    <!--                            </el-carousel-item>-->
                    <!--                            <el-carousel-item>-->
                    <!--                                <img height="100%" src="../assets/dentist/dentist4.png">-->
                    <!--                            </el-carousel-item>-->
                    <!--                            <el-carousel-item>-->
                    <!--                                <img height="100%" src="../assets/dentist/dentist5.png">-->
                    <!--                            </el-carousel-item>-->
                    <!--                            <el-carousel-item>-->
                    <!--                                <img height="100%" src="../assets/dentist/dentist6.png">-->
                    <!--                            </el-carousel-item>-->
                    <!--                            <el-carousel-item>-->
                    <!--                                <img height="100%" src="../assets/dentist/dentist7.png">-->
                    <!--                            </el-carousel-item>-->
                    <!--                            <el-carousel-item>-->
                    <!--                                <img height="100%" src="../assets/dentist/dentist8.png">-->
                    <!--                            </el-carousel-item>-->
                    <!--                        </el-carousel>-->
                    <!--                        <div>Date: Nov 2017 – Jul 2018</div>-->
                    <!--                        <div>Creator(4): Me, Jiamin Sun, Ruiying Wu, Fuzhang Yang</div>-->
                    <!--                        <div>Tools & Technologies: CodeIgniter, Vue.js, Element-UI</div>-->
                    <!--                        <el-tooltip class="item" effect="light" content="MORE" placement="top-start">-->
                    <!--                            <el-button icon="el-icon-search" circle v-on:click="more(2)"></el-button>-->
                    <!--                        </el-tooltip>-->
                    <!--                    </el-collapse-item>-->
                    <el-collapse-item title="#2 Puzzle game" name="3">
                        <h4><i class="el-icon-arrow-left"></i>MySpirit<i class="el-icon-arrow-right"></i></h4>
                        <el-carousel indicator-position="outside" height="200px">
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
                        <div>Date: Dec 2015 – Apr 2016</div>
                        <div>Creator(4)(Team EBM): Me, Ruizhe Hong, Kai Xie, Xiaomin Zhen</div>
                        <div>Tools & Technologies: Unity3D</div>
                        <div>
                            <el-alert
                                    title="Award: Second Prize, Microsoft Imagine Cup 2016 National Final, Games. May 2016."
                                    type="error"
                                    center
                                    :closable=false>
                            </el-alert>
                        </div>
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
                activeName: '3'
            };
        },
        methods: {
            more(id) {
                if (id === 0) {
                    window.location.href = "http://biocenter.shu.edu.cn/group";
                } else if (id === 1) {
                    window.location.href = "http://geg2018.shu.edu.cn";
                } else if (id === 2) {
                    window.location.href = "https://biocenter.shu.edu.cn/dentist_proj";
                } else if (id === 3) {
                    this.$router.push('/spirit');
                }
            },
        }
    }
</script>