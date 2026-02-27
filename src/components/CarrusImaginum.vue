<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface Props{
    photos:string[]
    basePath: string
    autoPlayDelay?: number
    loop?: boolean
    dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    autoPlayDelay:5000,
    loop: true,
    dragFree:false

}) 

</script>

<template>
  <Carousel 
    class="w-full"
    :opts="{
      loop:props.loop,
      dragFree: props.dragFree

    }"
     :plugins="[Autoplay({
      delay: props.autoPlayDelay,
      stopOnInteraction: false,
    })]"
    >
    <CarouselContent>
      <CarouselItem v-for="(photo, index) in props.photos" :key="index">
        <img 
          :src="`${ props.basePath }/${ photo }.jpg`" 
          :alt="`image ${ index + 1}`"
          class="w-full h-auto object-cover"
        >
      </CarouselItem>
    </CarouselContent>
  </Carousel> 
</template>



<style scoped>

</style>
