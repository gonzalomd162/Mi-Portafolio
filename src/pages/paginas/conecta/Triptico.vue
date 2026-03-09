<script setup lang="ts">
import CarrusImaginum from "@/components/CarrusImaginum.vue"
import { RouterLink } from "vue-router"

const tripticoPhotos = ["Mockup_triptico.jpg", "Triptico transversal F.jpg", "Triptico transversal F2.jpg"]

const tripticoExplanation = [
  "El triptico organiza la informacion por bloques para facilitar la lectura y mantener un recorrido claro.",
  "La jerarquia tipografica prioriza titular, mensaje principal y llamada a la accion.",
  "La pieza mantiene coherencia visual con los carteles de CONECTA para reforzar la identidad de campana.",
]
</script>

<template>
  <section class="min-h-screen bg-[#0b121b] px-5 pb-16 pt-24 md:px-10 lg:px-16">
    <div class="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
      <header class="space-y-4">
        <RouterLink
          to="/"
          class="inline-flex w-fit items-center rounded-full border border-[#cde4f880] bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 font-['Montserrat-SemiBold']"
        >
          Volver a Home
        </RouterLink>

        <h1 class="text-3xl font-bold text-white md:text-5xl font-['ClashDisplay']">
          Triptico Conecta
        </h1>

        <p class="max-w-3xl text-sm leading-relaxed text-[#d7e5f4] md:text-base font-['Montserrat']">
          Vista ampliada del triptico con carrusel grande y espacio dedicado para el texto explicativo.
        </p>
      </header>

      <div class="[&_img]:h-[420px] [&_img]:object-contain md:[&_img]:h-[700px]">
        <CarrusImaginum
          :photos="tripticoPhotos"
          base-path="/conecta_img"
          :auto-play-delay="5500"
        />
      </div>

      <article class="rounded-2xl border border-white/15 bg-[#10263d]/70 p-6">
        <h2 class="text-2xl font-bold text-white md:text-3xl font-['Montserrat-SemiBold']">
          Explicacion del triptico
        </h2>

        <p
          v-for="(paragraph, index) in tripticoExplanation"
          :key="index"
          class="mt-4 text-sm leading-relaxed text-[#d7e5f4] md:text-base font-['Montserrat']"
        >
          {{ paragraph }}
        </p>
      </article>

      <article class="rounded-2xl border border-white/15 bg-[#10263d]/70 p-6">
        <h2 class="text-2xl font-bold text-white md:text-3xl font-['Montserrat-SemiBold']">
          Texto explicatorio
        </h2>

        <p class="mt-4 text-sm leading-relaxed text-[#d7e5f4] md:text-base font-['Montserrat']">
          Espacio reservado para que puedas ampliar detalles del contenido del triptico, objetivos de comunicacion y uso en la campana.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
@font-face {
  font-family: "Montserrat";
  src: url(/fonts/static/Montserrat/Montserrat-Regular.ttf) format("truetype");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat-Light";
  src: url(/fonts/static/Montserrat/Montserrat-Light.ttf) format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat-SemiBold";
  src: url(/fonts/static/Montserrat/Montserrat-SemiBold.ttf) format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "ClashDisplay";
  src: url(/fonts/static/ClashDisplay/ClashDisplay-Semibold.ttf) format("truetype");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
</style>
