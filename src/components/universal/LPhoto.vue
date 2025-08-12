<script setup lang="ts">
defineProps<{ route: string }>()
</script>

<template>
  <div class="rounded-2lg mt-12 pb-20 lg:pb-0 lg:mt-0 h-full w-full">
    <img cla :src="route" alt="Photo image"/>
  </div>
</template>
