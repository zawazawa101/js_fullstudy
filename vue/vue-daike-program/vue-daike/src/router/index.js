import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
