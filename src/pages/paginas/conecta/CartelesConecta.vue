<script setup lang="ts">
import CarrusImaginum from "@/components/CarrusImaginum.vue"
import { RouterLink } from "vue-router"

const cartelesConecta = [
  {
    id: "unir",
    title: "Cartel 01  UNIR",
    concept: "Conecta generaciones desde lo cotidiano",
    description:
      "Pieza principal para exterior. Se muestra el mockup y el arte final para comparar impacto visual y lectura.",
    photos: ["Mockup carteles CONECTA.jpg", "UNIR RGB.jpg"],
  },
  {
    id: "reir",
    title: "Cartel 02  REIR",
    concept: "Humor compartido como punto de union",
    description:
      "Version de la serie que refuerza el tono cercano de la campana. Incluye contexto de aplicacion y pieza final.",
    photos: ["Mockup carteles CONECTA.jpg", "REIR RGB.jpg"],
  },
  {
    id: "amar",
    title: "Cartel 03  AMAR",
    concept: "Mensaje emocional y transversal",
    description:
      "Cartel centrado en la conexion emocional entre generaciones, manteniendo coherencia con el sistema visual de CONECTA.",
    photos: ["Mockup carteles CONECTA.jpg", "AMAR RGB.jpg"],
  },
  {
    id: "mupi",
    title: "Cartel 04  MUPI",
    concept: "Adaptacion a soporte urbano vertical",
    description:
      "Adaptacion del sistema grafico a formato mupi: mockup de calle y version final limpia para ver detalle de diseno.",
    photos: ["Mockup  mupi.jpg", "MUPI Final.jpg"],
  },
]

const cartelesPrincipales = cartelesConecta.filter((cartel) => cartel.id !== "mupi")
const cartelMupi = cartelesConecta.find((cartel) => cartel.id === "mupi")
</script>

<template>
  <section class="min-h-screen bg-[#0b121b] px-5 pb-16 pt-24 md:px-10 lg:px-16">
    <div class="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
      <header class="space-y-4">
        <RouterLink
          to="/"
          class="inline-flex w-fit items-center rounded-full border border-[#cde4f880] bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 font-['Montserrat-SemiBold']"
        >
          Volver a Home
        </RouterLink>

        <h1 class="text-3xl font-bold text-white md:text-5xl font-['ClashDisplay']">
          Carteles Conecta
        </h1>

        <p class="max-w-3xl text-sm leading-relaxed text-[#d7e5f4] md:text-base font-['Montserrat']">
          Mockup general de los 3 carteles de campaña y detalle final ampliado por pieza.
          En el 04 MUPI se mantiene el carrusel.
        </p>
      </header>

      <article class="overflow-hidden rounded-2xl  p-4 md:p-6">
        <p class="mb-4 text-xs tracking-[0.2em] text-[#9fc0e1] uppercase font-['Montserrat-Light']">
          Mockup general de campana
        </p>
        <img
          src="/Carteles/Mockup carteles CONECTA.jpg"
          alt="Mockup de los tres carteles principales de la campana Conecta"
          class="h-[280px] w-full rounded-xl object-cover md:h-[420px]"
        />
      </article>

      <article
        v-for="cartel in cartelesPrincipales"
        :key="cartel.id"
        class="space-y-5 rounded-2xl border border-white/15 bg-[#10263d]/70 p-4 md:p-6"
      >
        <div class="space-y-4">
          <p class="text-xs tracking-[0.2em] text-[#9fc0e1] uppercase font-['Montserrat-Light']">
            Serie Conecta
          </p>
          <h2 class="text-2xl font-bold text-white md:text-3xl font-['ClashDisplay']">
            {{ cartel.title }}
          </h2>
          <p class="text-base font-semibold text-[#dce9f8] font-['Montserrat-SemiBold']">
            {{ cartel.concept }}
          </p>
          <p class="text-sm leading-relaxed text-[#d7e5f4] md:text-base font-['Montserrat']">
            {{ cartel.description }}
          </p>
        </div>

        <img
          :src="`/Carteles/${cartel.photos[1]}`"
          :alt="`Detalle final ${cartel.title}`"
          class="h-[360px] w-full rounded-xl bg-[#0b121b] object-contain p-2 md:h-[540px]"
        />
      </article>

      <article
        v-if="cartelMupi"
        class="grid gap-5 rounded-2xl border border-white/15 bg-[#10263d]/70 p-4 md:p-6 xl:grid-cols-[1.05fr_0.95fr]"
      >
        <div class="space-y-4">
          <p class="text-xs tracking-[0.2em] text-[#9fc0e1] uppercase font-['Montserrat-Light']">
            Serie Conecta
          </p>
          <h2 class="text-2xl font-bold text-white md:text-3xl font-['ClashDisplay']">
            {{ cartelMupi.title }}
          </h2>
          <p class="text-base font-semibold text-[#dce9f8] font-['Montserrat-SemiBold']">
            {{ cartelMupi.concept }}
          </p>
          <p class="text-sm leading-relaxed text-[#d7e5f4] md:text-base font-['Montserrat']">
            {{ cartelMupi.description }}
          </p>
        </div>

        <div class="[&_img]:!object-contain [&_img]:bg-[#0b121b]">
          <CarrusImaginum
            :photos="cartelMupi.photos"
            base-path="/Carteles"
            :auto-play-delay="4500"
          />
        </div>
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
