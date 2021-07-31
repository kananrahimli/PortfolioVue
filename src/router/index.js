import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'
import Skills from '../views/Skills.vue'
const routes = [
  {
    path:'/home',
    component:Home
  },
  {
   path:'/about',
   component:About
  },
  {
    path:'/skills',
    component:Skills
   },
  {
    path:'/portfolio',
    component:Portfolio
  },
  {
    path:'/contact',
    component:Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass:'active'
})

export default router
