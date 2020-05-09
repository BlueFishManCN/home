<template>
    <div class="home">
        <el-image style="width: 25%" :src="url" lazy></el-image>
        <h3>Welcome to My Homepage :)</h3>
    </div>
</template>

<script>
    export default {
        name: 'home',

        data() {
            return {
                url: require('../assets/home/logo.gif'),
            }
        }
    }
</script>