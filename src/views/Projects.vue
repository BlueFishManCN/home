<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="#1 Research group website" name="1">
                        <h4>Shanghai University Bioinformatics Research Group website
                            <el-link type="primary" :underline="false"
                                     href="http://biocenter.shu.edu.cn/group"><i class="el-icon-view"></i></el-link>
                        </h4>
                        <div>Date: Jul 2019 until now</div>
                        <div>Creator(2): Me, Jiaming Ouyang</div>
                        <div>Tools & Technologies: CodeIgniter, Vue.js, Element-UI</div>
                    </el-collapse-item>
                    <el-collapse-item title="#2 Paper submission website" name="2">
                        <h4>2018 International Conference on Global Economy & Governance (GEG2018) paper submission
                            website
                            <el-link type="primary" :underline="false" href="http://geg2018.shu.edu.cn"><i
                                    class="el-icon-view"></i></el-link>
                        </h4>
                        <div>Date: Jul 2018</div>
                        <div>Creator(1): Me</div>
                        <div>Tools & Technologies: CodeIgniter, Vue.js, Material Design</div>
                    </el-collapse-item>
                    <el-collapse-item title="#3 Dentist appointment platform" name="3">
                        <h4>Good Dentist Appointment Platform
                            <el-link type="primary" :underline="false" href="http://biocenter.shu.edu.cn/dentist_proj">
                                <i class="el-icon-view"></i></el-link>
                        </h4>
                        <div>Date: Nov 2017 – Jul 2018</div>
                        <div>Creator(4): Me, Jiamin Sun, Ruiying Wu, Fuzhang Yang</div>
                        <div>Tools & Technologies: CodeIgniter, Vue.js, Element-UI</div>
                    </el-collapse-item>
                    <el-collapse-item title="#4 Puzzle game" name="4">
                        <h4>MySpirit
                            <el-link type="primary" :underline="false"
                                     href="https://bluefishmancn.github.io/home/#/spirit">
                                <i class="el-icon-view"></i></el-link>
                        </h4>
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
                activeName: '1',
            };
        }
    }
</script>