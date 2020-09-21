import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StarNotes',
    component: () => import ('@/views/StarNotes'),
    meta: {
      title: '星辰笔记'
    }
  },
  {
    path:'/StarBanner',
    name: 'StarBanner',
    component: () => import ('@/views/StarBanner'),
    meta: {
      title: '主页面'
    }
  },
  {
    path: '/StarLogin',
    name: 'StarLogin',
    component: () => import('@/views/StartLogin')
  },
  {
    path: '/StarRegister',
    name: 'StarRegister',
    component: () => import('@/views/StarRegister')
  },
  {
    path: '/noteClass',
    name: 'NoteClass',
    component: () => import('@/views/NoteClass'),
    meta: {
      title: '笔记分类'
    },
  },
  {
    path: '/noteList',
    name: 'NoteList',
    component: () => import('@/views/NoteList'),
    meta: {
      title: '笔记详情'
    }
  },
  {
    path: '/noteDetail',
    name: 'NoteDetail',
    component: () => import('@/views/NoteDetail'),
    meta: {
      title: '笔记详情'
    }
  },
  {
    path: '/addNote',
    name: 'AddNote',
    component: () => import('@/views/AddNote'),
    meta: {
      title: '添加笔记'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
