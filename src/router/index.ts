import About from "@/pages/paginas/About.vue";
import Contact from "@/pages/paginas/Contact.vue";
import Proyecto from "@/pages/paginas/Proyecto.vue";

import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/proyecto',
    name: 'proyecto',
    component: Proyecto
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/:patchMatch(.*)',
    redirect: '/'
  }
]
})