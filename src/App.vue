<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/papers">Papers</router-link>
            |
            <router-link to="/ged">GED</router-link>
            |
            <router-link to="/cgmp">CGMP</router-link>
            |
            <router-link to="/projects">Projects</router-link>
            |
            <router-link to="/spirit">MySpirit</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>