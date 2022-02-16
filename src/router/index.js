import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kedvencek from '../views/Kedvencek.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kedvencek',
    name: 'Kedvencek',
    component: Kedvencek
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
