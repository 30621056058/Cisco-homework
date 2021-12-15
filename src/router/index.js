import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/login.vue'
import firstpage from '../components/firstpage.vue'
import headertop from '../components/headertop.vue'
import floor from '../components/floor.vue'
import firstpagetwo from '../views/firstpagetwo.vue'
import header from '../components/header.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/firstpagetwo',
    name: 'firstpagetwo',
    component: firstpagetwo
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/header',
    name: 'header',
    component: header
  },
  {
    path: '/floor',
    name: 'floor',
    component: floor
  },
  {
    path: '/firstpage',
    name: 'firstpage',
    component: firstpage
  },
  {
    path: '/headertop',
    name: 'headertop',
    component: headertop
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
