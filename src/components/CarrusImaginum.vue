<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
    class=""
    :opts="{
      loop:props.loop,
      dragFree: props.dragFree

    }"
     :plugins="[Autoplay({
      delay: props.autoPlayDelay,
      stopOnInteraction: false,
    })]"
    >
    <CarouselContent> <!-- aqui 6
      7/4 ejemplo-->
      <CarouselItem v-for="(photo, index) in props.photos" :key="index">
        <img 
          :src="`${ props.basePath }/${ photo }`" 
          :alt="`image ${ index + 1}`"
          class="h-[360px] w-full rounded-2xl object-cover md:h-[560px]"
        >
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="left-3 border-[#cbe5ff60] bg-[#17304b]/75 text-white hover:bg-[#17304b]" />
    <CarouselNext class="right-3 border-[#cbe5ff60] bg-[#17304b]/75 text-white hover:bg-[#17304b]" />
  </Carousel> 
</template>



<style scoped>

</style>
