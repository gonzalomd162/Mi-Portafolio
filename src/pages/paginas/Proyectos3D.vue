<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface ProjectDetail {
  id: string
  title: string
  subtitle: string
  description: string
  banner: string
  details: string[]
}

const projects: ProjectDetail[] = [
  {
    id: 'weapon',
    title: 'Hard Surface Weapon',
    subtitle: 'Modelado, texturizado y lookdev para visual publicitario',
    description:
      'Proyecto enfocado en lenguaje hard-surface: limpieza de silueta, materiales con lectura clara y renders de estudio para presentar la pieza con impacto visual.',
    banner: '/Imagenes_Arma/Arma render 7.4.jpg',
    details: [
      '/Imagenes_Arma/Arma render 7.1.jpg',
      '/Imagenes_Arma/Arma render 7.2.jpg',
      '/Imagenes_Arma/Arma render 7.4.jpg',
      '/Imagenes_Arma/Captura de blender 2.jpg',
      '/Imagenes_Arma/Captura de Blender.jpg',
    ],
  },
  {
    id: 'ball',
    title: 'Procedural Ball',
    subtitle: 'Desarrollo procedural en Houdini y render final',
    description:
      'Exploracion de sistemas nodales para generar variaciones de forma y patron. El objetivo fue crear una pieza tecnica con acabado visual atractivo y flexible para distintas composiciones.',
    banner: '/PelotaPortada_fondoGrande.jpg',
    details: [
      '/PelotaPortada_fondoGrande.jpg',
      '/Imagenes_Bola/Captura Bola.jpg',
      '/Imagenes_Bola/Captura Bola 2.jpg',
      '/PelotaPortada.jpg',
      
    ],
  },
  {
    id: 'letters',
    title: 'Serie Letras 3D',
    subtitle: 'Piezas tipograficas tridimensionales',
    description:
      'Coleccion de letras trabajadas como objetos de diseno 3D. Cada una fue planteada con volumen, materialidad y composicion para funcionar tanto de forma individual como en sistema.',
    banner: '/imagenesLetras/letra_M.jpg',
    details: [
      '/imagenesLetras/letra_D.jpg',
      '/imagenesLetras/letra_G.jpg',
      '/imagenesLetras/letra_M.jpg',
    ],
  },
]
</script>

<template >
  <main class="min-h-screen bg-[#0b121b] text-white">
    <header class="px-6 pb-10 pt-24 md:px-12 lg:px-20">
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <RouterLink
          to="/"
          class="inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold transition hover:bg-white/20"
        >
          Volver al Home
        </RouterLink>

        <div class="space-y-3">
          <p class="text-xs tracking-[0.22em] text-[#d9e8f7] uppercase font-['Montserrat-Light']">
            Home / Proyectos 3D
          </p>
          <h1 class="text-3xl font-semibold leading-tight md:text-5xl font-['ClashDisplay']">
            Proyectos en detalle
          </h1>
          
        </div>
      </div>
    </header>

    <section
      v-for="project in projects"
      :key="project.id"
      class=" px-6 py-12 md:px-12 md:py-16 lg:px-20"
    >
      <div class="mx-auto w-full max-w-6xl">
        <div class="relative overflow-hidden rounded-3xl border border-white/20">
          <img
            :src="project.banner"
            :alt="project.title"
            class="h-[260px] w-full object-cover md:h-[420px]"
          >
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071523]/95 via-[#071523]/65 to-transparent p-6 md:p-8">
            <p class="text-xs tracking-[0.2em] text-[#9fc0e1] uppercase">
              Proyecto 3D
            </p>
            <h2 class="mt-2 text-2xl font-bold text-white md:text-4xl font-['ClashDisplay']">
              {{ project.title }}
            </h2>
            <p class="mt-2 text-sm text-[#d8e8f8] md:text-base font-['Montserrat']">
              {{ project.subtitle }}
            </p>
          </div>
        </div>

        <div class="mt-8 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article class="rounded-2xl border border-white/20 bg-[#1f3957]/65 p-6 md:p-7">
            <h3 class="text-lg font-semibold text-[#e4eef8] font-['Montserrat-SemiBold']">
              Sobre el proyecto
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-[#d7e4f2] md:text-base font-['Montserrat']">
              {{ project.description }}
            </p>
          </article>

          <Carousel
            class="w-full"
            :opts="{ loop: true }"
            :plugins="[Autoplay({ delay: 4200, stopOnInteraction: false })]"
          >
            <CarouselContent>
              <CarouselItem
                v-for="(detailImage, index) in project.details"
                :key="`${project.id}-${index}`"
              >
                <div class="relative overflow-hidden rounded-2xl border border-white/20 bg-[#1f3957]/65">
                  <img
                    :src="detailImage"
                    :alt="`${project.title} detalle ${index + 1}`"
                    class="h-[260px] w-full object-cover md:h-[420px]"
                  >
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious class="left-3 border-[#cbe5ff60] bg-[#17304b]/75 text-white hover:bg-[#17304b]" />
            <CarouselNext class="right-3 border-[#cbe5ff60] bg-[#17304b]/75 text-white hover:bg-[#17304b]" />
          </Carousel>
        </div>
      </div>
    </section>
  </main>
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
