
import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Proyectos3D from "@/pages/paginas/Proyectos3D.vue";
import MasCampanas from "@/pages/paginas/MasCampanas.vue";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { 
    path: "/Proyectos-3d",
    name: "Proyectos-3d",
    component: Proyectos3D 
    },
  {
     path: "/MasCampanas",
     name: "MasCampanas",
     component: MasCampanas
    },
]

})
