import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/login.vue'
import firstpage from '../components/firstpage.vue'
import headertop from '../components/headertop.vue'
import floor from '../components/floor.vue'
import firstpagetwo from '../views/firstpagetwo.vue'
import headera from '../components/headera.vue'
import casea from '../views/casea.vue'
import newcenter from '../views/newcenter.vue'
import contactus from '../views/contactus.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/firstpagetwo',
    name: 'firstpagetwo',
    component: firstpagetwo
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: contactus
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/casea',
    name: 'casea',
    component: casea
  },
  {
    path: '/headera',
    name: 'headera',
    component: headera
  },
  {
    path: '/floor',
    name: 'floor',
    component: floor
  },
  {
    path: '/newcenter',
    name: 'newcenter',
    component: newcenter
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
