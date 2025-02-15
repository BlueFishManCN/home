<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <el-timeline>
                    <el-timeline-item timestamp="Jul 2019 - Apr 2020" placement="top">
                        <el-card>
                            <h3>Shanghai University Bioinformatics Research Group website
                                <el-link type="primary" :underline="false"
                                         href="http://biocenter.shu.edu.cn/group"><i class="el-icon-view"></i></el-link>
                            </h3>
                            <div>Creator(2): Me(Jiyuan Zhang), Jiaming Ouyang</div>
                            <div>Tools & Technologies: CodeIgniter, Vue.js, Element-UI</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="Jul 2018" placement="top">
                        <el-card>
                            <h3>2018 International Conference on Global Economy & Governance (GEG2018) paper submission
                                website
                                <el-link type="primary" :underline="false" href="http://geg2018.shu.edu.cn"><i
                                        class="el-icon-view"></i></el-link>
                            </h3>
                            <div>Creator(1): Me</div>
                            <div>Tools & Technologies: CodeIgniter, Vue.js, Material Design</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="Nov 2017 – Jul 2018" placement="top">
                        <el-card>
                            <h3>Good Dentist Appointment Platform
                                <el-link type="primary" :underline="false"
                                         href="http://biocenter.shu.edu.cn/dentist_proj">
                                    <i class="el-icon-view"></i></el-link>
                            </h3>
                            <div>Creator(4): Me(Jiyuan Zhang), Jiamin Sun, Ruiying Wu, Fuzhang Yang</div>
                            <div>Tools & Technologies: CodeIgniter, Vue.js, Element-UI</div>
                        </el-card>
                    </el-timeline-item>

                    <el-timeline-item timestamp="Dec 2015 – Apr 2016" placement="top">
                        <el-card>
                            <h3>MySpirit<router-link to="/spirit"><i class="el-icon-view"></i></router-link>
                            </h3>
                            <div>Creator(4)(Team EBM): Me(Jiyuan Zhang), Ruizhe Hong, Kai Xie, Xiaomin Zhen</div>
                            <div>Tools & Technologies: Unity3D</div>
                            <div>
                                <el-alert
                                        title="Award: Second Prize, Microsoft Imagine Cup 2016 National Final, Games. May 2016."
                                        type="error"
                                        center
                                        :closable=false>
                                </el-alert>
                            </div>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'projects',

        data() {
            return {};
        }
    }
</script>