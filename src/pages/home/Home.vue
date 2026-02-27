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


     <CarrusImaginum class="" 
     :photos="photos"
     basePath="/imagenesLetras"
     :auto-play-delay="6000"
    />



  </div>

</section>

<section id="conecta">

  <div class="bg-[#04090ffe]  ">

    <!-- <img
            src="/fondo2.jpg"
            alt="Imagen principal"
            class="pt-3.5 w-screen  object-cover "
    /> -->

  </div>

</section>

<section id="carteles">
  <div class="bg-[#04090ffe]  ">

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

</style>
