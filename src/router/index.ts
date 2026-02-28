
import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Proyectos3D from "@/pages/paginas/Proyectos3D.vue";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { path: "/proyectos-3d",
    name: "proyectos-3d",
    component: Proyectos3D 
    },
]

})