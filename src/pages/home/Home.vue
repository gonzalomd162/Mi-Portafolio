<script lang="ts" setup>
import { scrollToSection } from '@/utils/scrollToSection';
import CarrusImaginum from '@/components/CarrusImaginum.vue';

import {
  NavigationMenu,
 
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  
 
  
} from '@/components/ui/navigation-menu'

const photos = ["letra_G", "letra_M", "letra_D"];


const menuItems = [
  {
    label:'Home',
    href: '#',
    onClick: () => scrollToSection('#')
  },
    {
    label:'3D',
    href: '#3d',
    onClick: () => scrollToSection('#vehiculis')
  },  {
    label:'Conecta',
    href: '#conecta',
    onClick: () => scrollToSection('#videre')
  },  {
    label:'Carteles',
    href: '#carteles',
    onClick: () => scrollToSection('#contactus')
  },{
    label:'About',
    href: '#about',
    onClick: () => scrollToSection('#contactus')
  },
]





</script>

<template>


<div class="flex justify-center gap-5 pr-10" >
 <NavigationMenu class="fixed top-[50px]  flex items-center gap-6 h-10 px-6 py-2 rounded-full bg-white/25 backdrop-blur-md z-50 ">
    <NavigationMenuList>

      <NavigationMenuItem class= " flex px-4 items-center rounded-full hover:bg-white/30 transition">
        <a href="#" @click.prevent="scrollToSection('#')">
          <NavigationMenuLink >
            Home
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

      <NavigationMenuItem class= " flex px-4 items-center rounded-full hover:bg-white/30 transition">
        <a href="#" @click.prevent="scrollToSection('#section-3d')">
          <NavigationMenuLink >
            3D
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

      <NavigationMenuItem class= " flex px-4 items-center rounded-full hover:bg-white/30 transition">
        <a href="#" @click.prevent="scrollToSection('#conecta')">
          <NavigationMenuLink >
            Conecta
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

      <NavigationMenuItem class= " flex px-4 items-center rounded-full hover:bg-white/30 transition">
        <a href="#" @click.prevent="scrollToSection('#carteles')">
          <NavigationMenuLink >
            Carteles
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

      <NavigationMenuItem class= " flex px-4 items-center rounded-full hover:bg-white/30 transition">
        <a href="#" @click.prevent="scrollToSection('#contacto')">
          <NavigationMenuLink >
            Contacto
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</div>

<section id="home">
  <div class="relative bg-[#04090ffe] pt-0 ">
    
    <img src="/ImagenesHome/fondo2.jpg"alt="Fondo"
    class=" inset-0 w-full h-full object-cover "/>

    <div class="flex columns-1" >
      <img src="/ImagenesHome/Designer and 3d artist_horizontal.png" alt="" width="1300px" 
      class="">
    </div>

    <div class="flex" width="300px">
      <img src="/ImagenesHome/Gonzalo Moreno.png" alt="" 
      class="">
      <img src="/ImagenesHome/26.png" alt=""  
      class="">
    </div>
      
  
   </div>

</section>
<section id="section-3d">
  <div class="bg-[#04090ffe]  ">
    
   <!-- 
     <CarrusImaginum 
     :photos="photos"
     basePath="/imagenesLetras"
     :auto-play-delay="6000"
    /> -->
    
  
  
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
