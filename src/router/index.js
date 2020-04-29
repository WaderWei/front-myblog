import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import main from '@/views/home/centerMain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: 'main',
        name: 'main',
        component: main
      },
      {
        path: '/writeBlog',
        name: 'writeBlog',
        component: () => import('@/views/add/writeBlog.vue')
      },
      {
        path: 'articlesList',
        name: 'articlesList',
        component: () => import('@/views/list/articlesList.vue')
      }
    ],
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/home/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/home/register.vue')
  },
  {
    path: '/repairLang',
    name: 'repairLang',
    component: () => import('@/views/bug/RepairLang.vue')
  },
  {
    path: '/md',
    name: 'md',
    component: () => import('@/views/test/MarkDownDemo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
