<script setup lang="ts">
const mindTripImages = [
  { src: "/Mindtrip/Render1.jpg", alt: "MindTrip render 1" },
  { src: "/Mindtrip/Render2.jpg", alt: "MindTrip render 2" },
  { src: "/Mindtrip/Render3.jpg", alt: "MindTrip render 3" },
  { src: "/Mindtrip/Render4.jpg", alt: "MindTrip render 4" },
  { src: "/Mindtrip/Render6.jpg", alt: "MindTrip render 5" },
  { src: "/Mindtrip/Render8.jpg", alt: "MindTrip render 6" },
  { src: "/Mindtrip/Render9.jpg", alt: "MindTrip render 7" },
  { src: "/Mindtrip/Render10.jpg", alt: "MindTrip render 8" },
  { src: "/Mindtrip/Render11.jpg", alt: "MindTrip render 9" },
  { src: "/Mindtrip/PruebaFichas.jpg", alt: "MindTrip fichas" },
]

</script>

<template>
  <section class="bg-[#0b121b] px-5 pb-16 pt-10 md:px-10 lg:px-16">
    <div class="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
      <header class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div class="space-y-4">
              <RouterLink
              to="/"
              class="text-white inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold transition hover:bg-white/20"
            >
              Volver al Home
            </RouterLink>
          <p class="text-xs tracking-[0.22em] text-[#d9e8f7] uppercase font-['Montserrat-Light']">
            Más campañas / MindTrip
          </p>
          <h1 class="text-3xl text-white font-['Montserrat-SemiBold'] md:text-4xl">
            MindTrip
          </h1>
          <div class="space-y-4 text-sm leading-7 text-[#fcfcfc] md:text-base font-['Montserrat']">
            <p>
              MindTrip es un juego de mesa diseñado alrededor del bienestar emocional y la reflexión colectiva. El proyecto aborda la salud mental desde una perspectiva lúdica, proponiendo a los jugadores un "viaje por la mente" mediante preguntas, situaciones y dinámicas que fomentan la empatía, la conversación y la introspección.
            </p>
            <p>
              Desde el punto de vista del diseño, el proyecto implicó el desarrollo completo de un sistema visual coherente aplicado a todos los elementos del juego: cartas, personajes, tablero, fichas, packaging e instrucciones. El estilo gráfico combina ilustración expresiva, colores vibrantes y una estética accesible que busca transmitir cercanía y dinamismo.
            </p>
            <p>
              El proceso incluyó una fase extensa de bocetaje y definición de estilo para unificar el lenguaje visual. Las ilustraciones de personajes y cartas se desarrollaron en herramientas de pintura digital, mientras que la maquetación y el sistema gráfico se construyeron en software de diseño vectorial. Además, se realizaron modelos 3D de fichas y visualizaciones del juego en Blender para generar renders y mockups realistas del producto final.
            </p>
            <p>
              El resultado es un juego compuesto por más de cuarenta cartas originales, personajes ilustrados, fichas impresas en 3D, un tablero físico y un packaging diseñado específicamente para reforzar la identidad visual del proyecto. MindTrip plantea el diseño de un juego como un sistema integral donde narrativa, ilustración y diseño gráfico trabajan conjuntamente para construir una experiencia lúdica coherente.
            </p>
          </div>
        </div>

        <div >
          
          <p class="text-sm leading-relaxed text-[#b7cfe6] font-['Montserrat']">
            Una selección de renders y fotografías para mostrar el acabado final, los materiales y la identidad visual del juego.
          </p>
        </div>
      </header>

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
    </div>
  </section>
</template>

<style scoped>
.mindtrip-mosaic {
  column-count: 1;
  column-gap: 1.75rem;
  margin-top: 1rem;
}

.mindtrip-item {
  display: inline-block;
  width: 100%;
  break-inside: avoid;
  margin-bottom: 1.75rem;
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

