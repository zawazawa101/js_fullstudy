import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('@/views/index')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
