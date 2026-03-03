<script setup lang="ts">
    const photos = ['Arma render 7.1', 'Arma render 7.2', 'Arma render 7.4', 'Captura de blender 2','Captura de blender'];
    const photos2 = ['RenderFinalPelotiña', 'Captura Bola'];
import CarrusImaginum_copy from '@/components/CarrusImaginum_copy.vue';
</script>

<template>
    <div class="relative w-full bg-[#3E5677] bg-top bg-no-repeat bg-[length:100%_auto] min-h-[1500px] "
  style="background-image: url('/fondo2 claro.jpg')"
  >
        <div class="flex justify-start pl-20 pt-20 w-120">
            <CarrusImaginum_copy
      class="rounded-lg" 
      :photos="photos"
      basePath="/Imagenes_Arma"
      :auto-play-delay="100000"
      />
      </div>

      <div class="flex justify-start pl-20 pt-5 w-120">
            <CarrusImaginum_copy
      class="rounded-lg" 
      :photos="photos2"
      basePath="/Imagenes_Bola"
      :auto-play-delay="100000"
      />
      </div>

      <div class="flex justify-start pl-20 pt-5 w-120">
            <CarrusImaginum_copy
      class="rounded-lg" 
      :photos="photos"
      basePath="/Imagenes_Arma"
      :auto-play-delay="100000"
      />
      </div>

    </div>
</template>



<style scoped>

</style>