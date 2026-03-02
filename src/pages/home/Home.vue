<script lang="ts" setup>
import { ref } from 'vue'
import { scrollToSection } from '@/utils/scrollToSection';
import CarrusImaginum from '@/components/CarrusImaginum.vue';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Toggle from '@/components/ui/toggle/Toggle.vue';
import { Menu } from 'lucide-vue-next';

const photos = ['letra_G', 'letra_M', 'letra_D'];
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

  <div class="bg-[#04090ffe]">

     
    <div class="flex relative"> 
      
      <CarrusImaginum 
      class=" z-0 h-185 w-max md:h-max " 
      :photos="photos"
      basePath="/imagenesLetras"
      :auto-play-delay="6000"
      />
      <img
          src="/3D.png"
          alt=""
          class=" z-10 w-25 ml-13 mt-24 absolute md:w-40 md:ml-19 md:mt-28 lg:w-50 lg:ml-28 lg:mt-40"
      />
      
      <h2 class="hidden z-10 md:inlinemd:text-left md:font-titulo md:w-40 md:absolute md:m-14 md:mt-40 md:text-destructive  md:mt-55 md:m-20 lg:mt-76 lg:m-31 ">
        Visuales 3D enfocados en publicidad y dirección visual.
      </h2>

      <button class=""
      >
        <RouterLink
          to="/proyectos-3d"
          class="absolute z-20 right-10 bottom-25 md:right-10 md:bottom-10 lg:right-16 lg:bottom-60 flex px-8 py-3 items-center rounded-full bg-white/25 transition  hover:text-red-500 border-white/40"
          >
          Proyectos 3D
        </RouterLink>
      </button>


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
      <img
            src="/conecta_img/foto video.jpg"
            alt=""
            class="m-5 z-20 lg:w-90 lg:h-80 md:w-60 md:h-60 flex-end  object-cover rounded-2xl "
      />
      <img
            src="/conecta_img/Mockup carteles.jpg"
            alt=""
            class="m-5 z-20 lg:w-90 lg:h-80 md:w-60 md:h-60 object-cover rounded-2xl  "
      />
      <img
            src="/conecta_img/Mockup_triptico.jpg"
            alt=""
            class="m-5 z-20 lg:w-90 lg:h-80 md:w-60 md:h-60 md:flex-col object-cover rounded-2xl  "
      />

      <button class=""
      >
        <RouterLink
          to="/MasCampanas"
          class="absolute z-20 right-10  md:right-10 md:bottom-10 lg:right-16 lg:bottom-60 flex px-5 py-3 items-center rounded-full bg-white/25 transition  hover:text-red-500 border-white/40"
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

<style scoped>
.titulo > h2 {
  font-family: Montserrat;
}
</style>
