<script setup lang="ts">
const props = defineProps<{
  photoName: string
}>()
</script>

<template>
  <div class="mt-12 relative ">
    <div class="hidden lg:flex w-[413px] h-[362px] bg-gradient-to-bl from-blue-sky to-white rounded-2lg lg:relative lg:-top-8 lg:-right-8" />
    <div class="relative top-0 left-0 lg:absolute mb-16 mask-cover">
      <img :src="`/images/pages/main/${photoName}`" alt="foto">
    </div>
  </div>
</template>
