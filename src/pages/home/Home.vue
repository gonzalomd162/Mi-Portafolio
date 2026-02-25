<script lang="ts" setup>
import { scrollToSection } from '@/utils/scrollToSection';
import {
  NavigationMenu,
 
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  
 
  
} from '@/components/ui/navigation-menu'




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


<div class=" bg-[#04090ffe] flex justify-center gap-5 pr-10 pt-10 pb-6" >
 <NavigationMenu class="fixed flex items-center gap-6 h-10 px-6 py-2 rounded-full bg-white/25 backdrop-blur-md ">
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
  <div class="bg-[#04090ffe]  ">
    
    <img 
            src="/PelotaPortada_fondoGrande.jpg"
            alt="Imagen principal"
            class="pt-3.5 w-screen  object-cover "
    />
  
    </div>

</section>
<section id="section-3d">
  <div class="bg-[#04090ffe]  ">
    
    <img 
            src="/PelotaPortada_fondoGrande.jpg"
            alt="Imagen principal"
            class="pt-3.5 w-screen  object-cover "
    />
  
    </div>

</section>

</template>

<style scoped>

</style>