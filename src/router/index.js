import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Boutique from '../views/Boutique.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/boutique', component: Boutique },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
