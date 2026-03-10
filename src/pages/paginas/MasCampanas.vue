<script setup lang="ts">
const mindTripImages = [
  { src: '/Mindtrip/Render1.jpg', alt: 'MindTrip render 1' },
  { src: '/Mindtrip/Render2.jpg', alt: 'MindTrip render 2' },
  { src: '/Mindtrip/Render3.jpg', alt: 'MindTrip render 3' },
  { src: '/Mindtrip/Render4.jpg', alt: 'MindTrip render 4' },
  { src: '/Mindtrip/Render6.jpg', alt: 'MindTrip render 5' },
  { src: '/Mindtrip/Render8.jpg', alt: 'MindTrip render 6' },
  { src: '/Mindtrip/Render9.jpg', alt: 'MindTrip render 7' },
  { src: '/Mindtrip/Render10.jpg', alt: 'MindTrip render 8' },
  { src: '/Mindtrip/Render11.jpg', alt: 'MindTrip render 9' },
  { src: '/Mindtrip/PruebaFichas.jpg', alt: 'MindTrip fichas' },
]
</script>

<template>
  <section class="bg-[#0b121b] px-5 pb-16 pt-10 md:px-10 lg:px-16">
    <div class="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-3xl space-y-4">
        <p class="text-xs tracking-[0.22em] text-[#d9e8f7] uppercase font-['Montserrat-Light']">
          Mas Campañas / MindTrip
        </p>
        <h1 class="text-3xl text-white font-['Montserrat-SemiBold'] md:text-4xl">
          MindTrip
        </h1>
        <p class="text-sm leading-relaxed text-[#dbe9f7] md:text-base font-['Montserrat']">
          Selección de renders y piezas del juego de mesa MindTrip. Una campaña pensada para
          mostrar el universo visual del proyecto y su atmósfera.
        </p>
      </div>

      <div class="rounded-2xl border border-white/20 bg-[#11243a]/75 px-4 py-3 text-xs text-[#cfe1f2] font-['Montserrat']">
        Modo mosaico
      </div>
    </div>

    <div class="mindtrip-mosaic">
      <figure
        v-for="image in mindTripImages"
        :key="image.src"
        class="mindtrip-item"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full rounded-2xl border border-white/20 object-cover"
        >
      </figure>
    </div>
  </section>
</template>

<style scoped>
.mindtrip-mosaic {
  column-count: 1;
  column-gap: 1.5rem;
}

.mindtrip-item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
}

@media (min-width: 640px) {
  .mindtrip-mosaic {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .mindtrip-mosaic {
    column-count: 3;
  }
}
</style>