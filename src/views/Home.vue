<template>
    <div class="home">
        <el-image style="width: 30%" v-for="url in urls" :src="url" lazy></el-image>
        <HelloWorld msg="Welcome to My Homepage :)"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',

        data() {
            return {
                urls: [require('../assets/home/logo.gif')],
            }
        },

        components: {
            HelloWorld
        }
    }
</script>