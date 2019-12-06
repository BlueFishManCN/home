<template>
    <div class="projects">
        <el-row type="flex" justify="center">
            <el-col :span="22">
                CGMP

            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: 'cgmp',

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