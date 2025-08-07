<script setup lang="ts">

</script>

<template>
  <span class="relative">
    <slot />

    <span class="inline-block absolute bottom-0 right-0 h-1 w-full">
      <img
        src="~/assets/images/underline.svg"
        alt="Word underline"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
    </span>
  </span>
</template>

