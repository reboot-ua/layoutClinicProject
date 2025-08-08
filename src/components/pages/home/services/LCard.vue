<script setup lang="ts">
import type { serviceIcon } from "../../../../types/servises";

defineProps<{ item: serviceIcon }>()

</script>

<template>
  <div class="flex flex-col justify-center items-center rounded-2lg py-8 px-8 bg-white">
    <div class="w-[70px] aspect-square rounded-full bg-blue-sky flex items-center justify-center">
      <img :src="`/images/icons/${item.icon}_icon.svg`" :alt="item.icon">
    </div>
    <h3 class="text-h4 text-blue-dark font-medium mb-4 text-center whitespace-nowrap">{{ item.title }}</h3>
    <p class="text-b1 text-text mb-4 text-center">{{ item.text }}</p>
    <nuxt-link :to="item.link" class="flex items-center justify-center">
      <span class="text-b2 text-blue-dark underline mr-2.5"> Learn More</span>
      <img src="~/assets/images/icons/arrow_right_circle_icon.svg" alt="ArrowRight Circle Icon" />
    </nuxt-link>
  </div>
</template>
