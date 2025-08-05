
<script setup lang="ts">
</script>
<template>
  <div class="lg:bg-blue-light flex justify-between items-center max-w-contant mt-10 lg:py-4 px-5 lg:px-10 rounded-lg">
    <div>
      <LLogo />
    </div>
      <LNavBarHeader class="hidden lg:flex"/>
    <div class="hidden lg:flex text-center gap-4">
      <LUserAvatar />
      <LButton> Book Now </LButton>

    </div>
      <div class="lg:hidden bg-blue w-12 h-12 rounded-lg flex items-center justify-center">
        <img src="~/assets/images/icons/toggleIcon.svg" alt="Menu toggle icon">
      </div>
  </div>
</template>


<style scoped></style>