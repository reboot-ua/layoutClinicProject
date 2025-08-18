<script setup lang="ts">
import type { clientItem } from '~/types/clientItem';

defineProps<{item:clientItem}>()
</script>

<template>
  <div class="flex flex-col gap-4 px-8 pt-6 pb-8 mb-12 rounded-2lg shadow-userMessageCard">
    <div class="flex items-center w-full gap-2">
      <div class="rounded-full h-16 w-16">
        <img :src="item.photo" alt="Client Foto">
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-h4 text-blue-dark capitalize">{{ item.name }}</div>
        <div 
         class="flex items-center gap-[1px]">
          <img v-for="(star, i) in item.stars" key="i" src="~/assets/images/icons/Star.svg" alt="">
        </div>
      </div>
    </div>
    <div class="text-b2 w-[312px]"> {{item.feedback}}
    </div>
  </div>
</template>
