<script setup lang="ts">
import { RouterLink } from "vue-router"

defineProps<{
  title: string
  concept: string
  description: string
  mockupImage: string
  finalImage: string
}>()
</script>

<template>
  <section class="min-h-screen bg-[#0b121b] px-5 pb-16 pt-24 md:px-10 lg:px-16">
    <div class="mx-auto flex w-full max-w-[1180px] flex-col gap-8">
      <header class="space-y-4">
        <RouterLink
          to="/"
          class="inline-flex w-fit items-center rounded-full border border-[#cde4f880] bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 font-['Montserrat-SemiBold']"
        >
          Volver a Home
        </RouterLink>

        <h1 class="text-3xl font-bold text-white md:text-5xl font-['ClashDisplay']">
          {{ title }}
        </h1>

        <p class="max-w-3xl text-base font-semibold text-[#dce9f8] font-['Montserrat-SemiBold']">
          {{ concept }}
        </p>

        <p class="max-w-4xl text-sm leading-relaxed text-[#d7e5f4] md:text-base font-['Montserrat']">
          {{ description }}
        </p>
      </header>

      <article class="space-y-4 rounded-2xl border border-white/15 bg-[#10263d]/70 p-4 md:p-6">
        <p class="text-xs tracking-[0.2em] text-[#9fc0e1] uppercase font-['Montserrat-Light']">
          Comparativa visual
        </p>

        <div class="grid gap-4 lg:grid-cols-2">
          <figure class="space-y-2">
            <img
              :src="mockupImage"
              :alt="`Mockup ${title}`"
              class="h-[300px] w-full rounded-xl bg-[#0b121b] object-contain p-2 md:h-[440px]"
            />
            <figcaption class="text-xs text-[#c9d9ea] font-['Montserrat']">
              Mockup
            </figcaption>
          </figure>

          <figure class="space-y-2">
            <img
              :src="finalImage"
              :alt="`Cartel final ${title}`"
              class="h-[300px] w-full rounded-xl bg-[#0b121b] object-contain p-2 md:h-[440px]"
            />
            <figcaption class="text-xs text-[#c9d9ea] font-['Montserrat']">
              Cartel final
            </figcaption>
          </figure>
        </div>
      </article>
    </div>
  </section>
</template>
