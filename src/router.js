import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/papers',
            name: 'papers',
            component: () => import('./views/Papers.vue')
        },
        {
            path: '/ged',
            name: 'ged',
            component: () => import('./views/GED.vue')
        },
        {
            path: '/cgmp',
            name: 'cgmp',
            component: () => import('./views/CGMP.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('./views/Projects.vue')
        },
        {
            path: '/spirit',
            name: 'spirit',
            component: () => import('./views/Spirit.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
