
import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Proyectos3D from "@/pages/paginas/Proyectos3D.vue";
import MasCampanas from "@/pages/paginas/MasCampanas.vue";
import CartelesConecta from "@/pages/paginas/conecta/CartelesConecta.vue";
import Triptico from "@/pages/paginas/conecta/Triptico.vue";
import Video from "@/pages/paginas/conecta/Video.vue";
import ConectaCartel from "@/pages/paginas/carteles/Conecta.vue";
import MupiCartel from "@/pages/paginas/carteles/Mupi.vue";
import LujuriaCartel from "@/pages/paginas/carteles/Lujuria.vue";
import CrefadCartel from "@/pages/paginas/carteles/Crefad.vue";



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
          {
        path: "/conecta/CartelesConecta",
        name: "CartelesConecta",
        component: CartelesConecta
        },
          {
        path: "/conecta/Triptico",
        name: "Triptico",
        component: Triptico
        },
          {
        path: "/conecta/Video",
        name: "Video",
        component: Video
        },
      {
        path: "/carteles/Conecta",
        name: "ConectaCartel",
        component: ConectaCartel
      },
      {
        path: "/carteles/Mupi",
        name: "MupiCartel",
        component: MupiCartel
      },
      {
        path: "/carteles/Lujuria",
        name: "LujuriaCartel",
        component: LujuriaCartel
      },
      {
        path: "/carteles/Crefad",
        name: "CrefadCartel",
        component: CrefadCartel
      },
]

})
