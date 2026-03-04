<script lang="ts" setup>
import { ref } from 'vue'
import { scrollToSection } from '@/utils/scrollToSection';
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Toggle from '@/components/ui/toggle/Toggle.vue';
import { Menu } from 'lucide-vue-next';

const works3D = [
  {
    title: 'Hard Surface Weapon',
    subtitle: 'Modelado y lookdev para visual publicitario',
    image: '/Imagenes_Arma/Arma render 7.4.jpg',
  },
  {
    title: 'Studio Render',
    subtitle: 'Iluminacion y composicion de producto',
    image: '/Imagenes_Arma/Arma render 7.2.jpg',
  },
  
  {
    title: 'WireFrame',
    subtitle: 'Composición de la escena',
    image: '/Imagenes_Arma/Captura de blender 2.jpg',
  },
   {
    title: 'procedural Ball',
    subtitle: 'Esquema nodal',
    image: '/Imagenes_Bola/RenderFinalPelotiña.jpg',
  },
   {
    title: 'WireFrame',
    subtitle: 'Pieza 3D procedural en Houdini SideFX',
    image: '/Imagenes_Bola/Captura Bola.jpg',
  },
  {
    title: 'Letra G',
    subtitle: 'Pieza 3D letra G',
    image: '/imagenesLetras/letra_G.jpg',
  },
 {
    title: 'Letra M',
    subtitle: 'Pieza 3D letra M',
    image: '/imagenesLetras/letra_M.jpg',
  },
  {
    title: 'Letra D',
    subtitle: 'Pieza 3D letra D',
    image: '/imagenesLetras/letra_D.jpg',
  },
 
  
]
const conectaProjects = [
  {
    title: 'Video de campana',
    subtitle: 'Spot principal con narrativa intergeneracional',
    image: '/conecta_img/foto video.jpg',
    to: '/conecta/Video',
  },
  {
    title: 'Serie de carteles',
    subtitle: 'Sistema visual para exterior y soportes impresos',
    image: '/conecta_img/Mockup carteles.jpg',
    to: '/conecta/CartelesConecta',
  },
  {
    title: 'Triptico editorial',
    subtitle: 'Pieza informativa para la accion de marca',
    image: '/conecta_img/Mockup_triptico.jpg',
    to: '/conecta/Triptico',
  },
]
const posters = [
  {
    title: 'Serie principal',
    subtitle: 'Carteles conceptuales para campanas de marca',
    image: '/conecta_img/Mockup carteles.jpg',
  },
  {
    title: 'Poster frame',
    subtitle: 'Direccion de arte con composicion editorial',
    image: '/Free_Poster_Frame_Mockup_2.jpg',
  },
  {
    title: 'Mupi urbano',
    subtitle: 'Adaptacion para entorno exterior y gran formato',
    image: '/conecta_img/Mockup  mupi.jpg',
  },
]
const menuOpen = ref(false)

const handleMenuClick = (sectionId: string) => {
  scrollToSection(sectionId)
  menuOpen.value = false
}
</script>

<template>

  <Toggle
    class="fixed top-2 right-4 bg-slate-500 md:hidden z-50"
    @click="menuOpen = !menuOpen"
  >
    <Menu />
  </Toggle>

  <div class="flex justify-center gap-5 pr-10" >
    <NavigationMenu class="hidden md:flex fixed top-[50px] items-center gap-6 h-10 px-6 py-2 rounded-full bg-white/25 backdrop-blur-md z-50 ">
      <NavigationMenuList>

        <NavigationMenuItem class="flex px-4 items-center rounded-full hover:bg-white/30 transition">
          <a href="#" @click.prevent="scrollToSection('#')">
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem class="flex px-4 items-center rounded-full hover:bg-white/30 transition">
          <a href="#" @click.prevent="scrollToSection('#section-3d')">
            <NavigationMenuLink>
              3D
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem class="flex px-4 items-center rounded-full hover:bg-white/30 transition">
          <a href="#" @click.prevent="scrollToSection('#conecta')">
            <NavigationMenuLink>
              Conecta
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem class="flex px-4 items-center rounded-full hover:bg-white/30 transition">
          <a href="#" @click.prevent="scrollToSection('#carteles')">
            <NavigationMenuLink>
              Carteles
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem class="flex px-4 items-center rounded-full hover:bg-white/30 transition">
          <a href="#" @click.prevent="scrollToSection('#contacto')">
            <NavigationMenuLink>
              Contacto
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  </div>

  <div
    v-if="menuOpen"
    class="fixed top-14 right-4 bg-white/25 backdrop-blur-md rounded-2xl px-3 py-2 z-50 md:hidden"
  >
    <nav class="flex flex-col items-start gap-1">
      <a href="#" class="flex px-3 py-1 items-center rounded-full hover:bg-white/30 transition" @click.prevent="handleMenuClick('#')">
        Home
      </a>
      <a href="#" class="flex px-3 py-1 items-center rounded-full hover:bg-white/30 transition" @click.prevent="handleMenuClick('#section-3d')">
        3D
      </a>
      <a href="#" class="flex px-3 py-1 items-center rounded-full hover:bg-white/30 transition" @click.prevent="handleMenuClick('#conecta')">
        Conecta
      </a>
      <a href="#" class="flex px-3 py-1 items-center rounded-full hover:bg-white/30 transition" @click.prevent="handleMenuClick('#carteles')">
        Carteles
      </a>
      <a href="#" class="flex px-3 py-1 items-center rounded-full hover:bg-white/30 transition" @click.prevent="handleMenuClick('#contacto')">
        Contacto
      </a>
    </nav>
  </div>

<section id="home">
  <div class=" bg-[#04090ffe] pt-0 ">

    <img src="/PRUEBA_Home.jpg" alt="">

    <!-- <img src="/ImagenesHome/fondo2.jpg"alt="Fondo" height="100px"
    class=" absolute inset-0 w-full h-full object-cover  z-10 "/>

    <div class=" flex columns-1 justify-center items-start  z-20" >
      <img src="/ImagenesHome/Designer and 3d artist_horizontal.png" alt="" width="1300px"
      class="">
    </div>

    <div class=" flex justify-between  z-20">
      <img src="/ImagenesHome/Gonzalo Moreno.png" alt=""  width="600px"
      class="">
      <img src="/ImagenesHome/26.png" alt=""   width="600px"
      class="">
    </div> -->


   </div>

</section>

<section id="section-3d">

  <div class="bg-[#04090ffe] px-5 py-14 md:px-10 lg:px-16">
    <div class="mx-auto w-full max-w-6xl rounded-[28px] border border-[#8ca7c124] bg-gradient-to-b from-[#0d1d30fe] via-[#4c6684] to-[#243a56] p-5 shadow-[0_30px_80px_rgba(4,9,15,0.5)] md:p-8">
      <div class="mb-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex max-w-2xl flex-col gap-4">
          <p class="font-['Montserrat-Light'] text-xs tracking-[0.22em] text-[#d9e8f7] uppercase  ">
            Home / 3D section
          </p>
          <h2 class="font-['ClashDisplay'] text-3xl leading-[1.05]  text-white md:text-5xl ">
            Introduccion a mis proyectos 3D
          </h2>
          <p class="max-w-xl text-sm leading-relaxed text-[#d7e4f2] md:text-base font-['Montserrat']">
            Visuales creados para publicidad y direccion de arte. Este carrusel muestra una seleccion de proyectos para presentar mi estilo y proceso de trabajo.
          </p>
        </div>

        
      </div>

      <div class="grid gap-6 lg:grid-cols-12">
        <div class="lg:col-span-8">
          <Carousel
            class="w-full"
            :opts="{ loop: true }"
            :plugins="[Autoplay({
              delay: 4600,
              stopOnInteraction: false,
            })]"
          >
            <CarouselContent>
              <CarouselItem
                v-for="(work, index) in works3D"
                :key="work.title"
              >
                <div class="relative overflow-hidden rounded-2xl border border-white/20 bg-[#1e334d]">
                  <img
                    :src="work.image"
                    :alt="`Proyecto 3D ${index + 1}`"
                    class="h-[280px] w-full object-cover md:h-[420px]"
                  >
                  <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071523]/95 via-[#071523]/65 to-transparent p-5 md:p-6">
                    <p class="text-xs tracking-[0.2em] text-[#9fc0e1] uppercase">
                      Proyecto {{ index + 1 }}
                    </p>
                    <h3 class="mt-2 text-xl font-bold text-white md:text-2xl">
                      {{ work.title }}
                    </h3>
                    <p class="mt-1 text-sm text-[#d8e8f8]">
                      {{ work.subtitle }}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious class="left-3 border-[#cbe5ff60] bg-[#17304b]/70 text-white hover:bg-[#17304b]" />
            <CarouselNext class="right-3 border-[#cbe5ff60] bg-[#17304b]/70 text-white hover:bg-[#17304b]" />
          </Carousel>
        </div>

        <div class="flex flex-col justify-between gap-6 rounded-2xl border border-white/20 bg-[#11243a]/75 p-5 lg:col-span-4">
          <div class="space-y-4">
            <img
              src="/3D.png"
              alt="3D"
              class="w-20 md:w-24"
            >
            <p class="text-sm leading-relaxed text-[#d7e4f2] font-['Montserrat']">
              Cada pieza incluye desarrollo de concepto, modelado, materiales e iluminacion para una presentacion visual clara y profesional.
            </p>
          </div>

          <RouterLink
            to="/Proyectos-3d"
            class="inline-flex w-fit items-center justify-center rounded-full border border-[#cde4f880] bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Proyectos 3D
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

</section>

<section id="conecta">

  <div class="bg-[#04090ffe] px-5 pb-16 pt-6 md:px-10 lg:px-16">
    <div
      class="mx-auto w-full max-w-6xl rounded-[28px] border border-[#8ca7c124] bg-gradient-to-b from-[#0d1d30fe] via-[#45607e] to-[#1c324d] p-5 shadow-[0_30px_80px_rgba(4,9,15,0.45)] md:p-8"
    >
      <div class="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl space-y-4">
          <p class="text-xs tracking-[0.22em] text-[#d9e8f7] uppercase font-['Montserrat-Light']">
            Home / Conecta section
          </p>
          <img
            src="/conecta_img/CONECTA_.png"
            alt="Conecta"
            class="w-full max-w-[430px] object-contain"
          >
          <p class="text-sm leading-relaxed text-[#dbe9f7] md:text-base font-['Montserrat']">
            Campana de conexion intergeneracional centrada en emociones compartidas.
            La idea no compara epocas: muestra como jovenes y mayores viven hoy
            el amor, la amistad y el humor desde un lenguaje visual comun.
          </p>
        </div>

        <RouterLink
          to="/MasCampanas"
          class="inline-flex w-fit items-center justify-center rounded-full border border-[#cde4f880] bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          Mas proyectos
        </RouterLink>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        <RouterLink
          v-for="project in conectaProjects"
          :key="project.title"
          :to="project.to"
          class="group overflow-hidden rounded-2xl border border-white/20 bg-[#10263d]/70 transition hover:-translate-y-1 hover:bg-[#15324f]/80"
        >
          <div class="h-56 overflow-hidden md:h-60 ">
            <img
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105 "
            >
          </div>
          <div class="space-y-2 p-5">
            <h3 class="text-lg font-bold text-white font-['Montserrat-SemiBold']">
              {{ project.title }}
            </h3>
            <p class="text-sm leading-relaxed text-[#d7e5f4] font-['Montserrat']">
              {{ project.subtitle }}
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>

</section>
<section id="carteles">
  <div class="bg-[#04090ffe] px-5 pb-16 pt-6 md:px-10 lg:px-16">
    <div class="mx-auto w-full max-w-6xl rounded-[28px] border border-[#8ca7c124] bg-gradient-to-b from-[#7491af] via-[#47617f] to-[#1f3550] p-5 shadow-[0_30px_80px_rgba(4,9,15,0.45)] md:p-8">
      <div class="mb-8 grid gap-6 lg:grid-cols-12">
        <div class="space-y-4 lg:col-span-8">
          <p class="text-xs tracking-[0.22em] text-[#d9e8f7] uppercase font-['Montserrat-Light']">
            Home / Carteles section
          </p>
          <h2 class="text-3xl leading-[1.05] text-white md:text-5xl font-['ClashDisplay']">
            Carteles
          </h2>
          <p class="max-w-2xl text-sm leading-relaxed text-[#dbe9f7] md:text-base font-['Montserrat']">
            En este apartado muestro carteles que diseno para campanas y piezas promocionales.
            Trabajo composicion, tipografia e impacto visual para comunicar mensajes claros en digital y en gran formato.
          </p>
        </div>

        <div class="flex items-end justify-start lg:col-span-4 lg:justify-end">
          <RouterLink
            to="/conecta/CartelesConecta"
            class="inline-flex w-fit items-center justify-center rounded-full border border-[#cde4f880] bg-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/20 font-['Montserrat-SemiBold']"
          >
            Ver carteles
          </RouterLink>
        </div>
      </div>

      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="poster in posters"
          :key="poster.title"
          class="group overflow-hidden rounded-2xl border border-white/20 bg-[#10263d]/70 transition hover:-translate-y-1 hover:bg-[#15324f]/80"
        >
          <div class="h-72 overflow-hidden md:h-80">
            <img
              :src="poster.image"
              :alt="poster.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            >
          </div>
          <div class="space-y-2 p-5">
            <h3 class="text-lg text-white font-['Montserrat-SemiBold']">
              {{ poster.title }}
            </h3>
            <p class="text-sm leading-relaxed text-[#d7e5f4] font-['Montserrat']">
              {{ poster.subtitle }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>

</section>

<section id="contacto">
  <div class="bg-[#04090ffe]  ">

    <<!-- img
            src="/fondo2.jpg"
            alt="Imagen principal"
            class="pt-3.5 w-screen  object-cover "
    /> -->

  </div>

</section>

</template>

<style scoped>

@font-face {
  font-family: "Montserrat";
  src: url(/fonts/static/Montserrat/Montserrat-Regular.ttf) format("truetype");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat-Light";
  src: url(/fonts/static/Montserrat/Montserrat-Light.ttf) format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat-SemiBold";
  src: url(/fonts/static/Montserrat/Montserrat-SemiBold.ttf) format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "ClashDisplay";
  src: url(/fonts/static/ClashDisplay/ClashDisplay-Semibold.ttf) format("truetype");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
</style>
