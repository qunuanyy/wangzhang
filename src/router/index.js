import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'mainlayout',
    component: () => import('../views/layout/MainLayout')

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
