import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Steeper from '../views/Steeper/Steeper.vue'
import Maps from '../views/Maps/Maps.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Steeper
  },
  {
    path: '/reponse',
    name: 'Reponse',
    component: Maps
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
