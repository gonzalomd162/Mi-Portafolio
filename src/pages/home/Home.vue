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
    title: 'Detail Pass',
    subtitle: 'Composición de la escena',
    image: '/Imagenes_Arma/Captura de blender 2.jpg',
  },
   {
    title: 'procedural Ball',
    subtitle: 'Esquema nodal',
    image: '/Imagenes_Bola/RenderFinalPelotiña.jpg',
  },
  {
    title: 'Procedural Ball',
    subtitle: 'Pieza 3D procedural en Houdini SideFX',
    image: '/Imagenes_Bola/Captura Bola.jpg',
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
    <div class="mx-auto w-full max-w-6xl rounded-[28px] border border-[#8ca7c124] bg-gradient-to-b from-[#7f9ab9] via-[#4c6684] to-[#243a56] p-5 shadow-[0_30px_80px_rgba(4,9,15,0.5)] md:p-8">
      <div class="mb-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex max-w-2xl flex-col gap-4">
          <p class="text-xs tracking-[0.22em] text-[#d9e8f7] uppercase">
            Home / 3D section
          </p>
          <h2 class="font-['Montserrat'] text-3xl leading-[1.05] font-extrabold text-white md:text-5xl">
            Introduccion a mis proyectos 3D
          </h2>
          <p class="max-w-xl text-sm leading-relaxed text-[#d7e4f2] md:text-base">
            Visuales creados para publicidad y direccion de arte. Este carrusel muestra una seleccion de proyectos para presentar mi estilo y proceso de trabajo.
          </p>
        </div>

        <div class="flex items-center gap-3">
          <div class="h-2.5 w-2.5 rounded-full bg-[#cbe5ff]" />
          <div class="h-2.5 w-2.5 rounded-full bg-[#95b4d5]" />
          <div class="h-2.5 w-2.5 rounded-full bg-[#4f6f90]" />
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
            <p class="text-sm leading-relaxed text-[#d7e4f2]">
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

  <div 
  class="relative w-full bg-[#04090ffe] bg-top bg-no-repeat bg-[length:100%_auto] min-h-[1500px] "
  style="background-image: url('/fondo2.jpg')"
  >

    <!-- <img
            src="/fondo2.jpg"
            alt="Imagen principal"
            class="block w-full h-auto object-cover "
    /> -->
    <div class=" ">
      <div class="flex justify-center">
        <img 
        src="/conecta_img/CONECTA_.png" 
        alt=""
        class="object-cover  w-200 pb-0"
        >
        
      </div>
      <p class="text-white m-9 md:m30 lg:m-40">
          Esta campaña de conexión intergeneracional muestra que emociones como el amor, la amistad y el humor se entienden igual a cualquier edad. Lejos de comparar el pasado con el presente, el proyecto pone el foco en cómo personas jóvenes y mayores viven hoy esos mismos sentimientos.
        </p>
    </div>

    <div class="flex flex-col justify-center md:flex-row ">
      <button>
        <RouterLink
          to="/conecta/Video"
          class=""
        >
          <img
                src="/conecta_img/foto video.jpg"
                alt=""
                class="m-5 z-20 lg:w-90 lg:h-80 md:w-60 md:h-60 flex-end  object-cover rounded-2xl "
          />
        </RouterLink>
      </button>
      <button>
      
        <RouterLink
          to="/conecta/CartelesConecta"
          class=""
        >

          <img
                src="/conecta_img/Mockup carteles.jpg"
                alt=""
                class="m-5 z-20 lg:w-90 lg:h-80 md:w-60 md:h-60 object-cover rounded-2xl  "
          />
        </RouterLink>
      
      </button>
      <button>
        <RouterLink
          to="/conecta/Triptico"
          class=""
        >
          <img
                src="/conecta_img/Mockup_triptico.jpg"
                alt=""
                class="m-5 z-20 lg:w-90 lg:h-80 md:w-60 md:h-60 md:flex-col object-cover rounded-2xl  "
          />
        </RouterLink>
      
      </button>
      <button>
      
        <RouterLink
          to="/MasCampanas"
          class="absolute z-20 right-10  md:right-10 md:bottom-10 lg:right-16 lg:bottom-60 flex px-5 py-3 items-center rounded-full bg-white/25 transition  hover:text-white border-white/40"
        >
          Mas proyectos
        </RouterLink>
        
      </button>

    </div >
       
    <div class="flex justify-center">
      
    </div>
  </div>

</section>

<section id="carteles">
  <div class="bg-[#04090ffe]  ">
    <div 
  class="relative w-full bg-[#04090ffe] bg-top bg-no-repeat bg-[length:100%_auto] min-h-[1500px] "
  style="background-image: url('/fondo2.jpg')"
  >
  </div>

   <!--  <img
            src="/fondo2.jpg"
            alt="Imagen principal"
            class="pt-3.5 w-screen  object-cover "
    /> -->

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
