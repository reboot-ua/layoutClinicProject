<script setup lang="ts">
const props = defineProps<{
  photoName: string
}>()
</script>

<template>
  <div class="relative lg:mr-8 mt-12 lg:mt-0">
    <div class="hidden lg:block rounded-2lg absolute left-8 bottom-8 bg-gradient-to-bl from-blue-sky to-white h-full w-full" />

    <div class="relative rounded-2lg overflow-hidden">
      <img :src="`/images/pages/main/${photoName}`" alt="foto">
    </div>
  </div>
</template>
