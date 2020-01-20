import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

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
        component: () => import('@/views/home/myMain.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
