
<script setup lang="ts">
</script>
<template>
  <div class="bg-blue-light flex justify-between items-center max-w-contant mt-10 py-4 px-10 rounded-lg">
    <div>
      <NuxtLink to="/">
        <img src="/images/logo/logo.svg" alt="logo" class="" />
      </NuxtLink>
    </div>
      <LNavBarHeader />
    <div class="flex text-center gap-4">
      <LUserAvatar />
      <LButton> Book Now </LButton>
    </div>
  </div>
</template>


<style scoped></style>