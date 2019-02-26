<template>
    <div class="home">
        <img width="25%" src="../assets/logo.gif">
        <HelloWorld msg="Welcome to My Homepage"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>