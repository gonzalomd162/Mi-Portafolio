<script lang="ts" setup>
import { scrollToSection } from '@/utils/scrollToSection';
import {
  NavigationMenu,
 
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  
  navigationMenuTriggerStyle,
  
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

<section id="home">
  <div class="bg-[#04090ffe]  ">
    
    <img 
            src="/PelotaPortada_fondoGrande.jpg"
            alt="Imagen principal"
            class="pt-3.5 w-screen  object-cover "
    />
  
    </div>

</section>
<section id="3D">
  <div class="bg-[#04090ffe]  ">
    
    <img 
            src="/PelotaPortada_fondoGrande.jpg"
            alt="Imagen principal"
            class="pt-3.5 w-screen  object-cover "
    />
  
    </div>

</section>

 <NavigationMenu>
    <NavigationMenuList>

      <NavigationMenuItem>
        <a href="#" @click.prevent="scrollToSection('#')">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            Home
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <a href="#" @click.prevent="scrollToSection('#3D')">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            3D
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <a href="#" @click.prevent="scrollToSection('#conecta')">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            Conecta
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <a href="#" @click.prevent="scrollToSection('#carteles')">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            Carteles
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <a href="#" @click.prevent="scrollToSection('#contacto')">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            Contacto
          </NavigationMenuLink> 
        </a>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
        

</template>

<style scoped>

</style>