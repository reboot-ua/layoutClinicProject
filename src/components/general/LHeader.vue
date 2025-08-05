<template>
  <div class="bg-blue-light flex justify-between items-center max-w-contant mt-10 py-4 px-10 rounded-lg">
    <div>
      <NuxtLink to="/">
        <img src="../../public/images/logo/logo.svg" alt="logo" class="" />
      </NuxtLink>
    </div>
      <LNavBarHeader />
    <div>
      button
    </div>
  </div>
</template>

<script setup lang="ts">
import LNavBarHeader from './LNavBarHeader.vue';

</script>

<style scoped></style>