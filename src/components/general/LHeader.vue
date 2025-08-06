<script setup lang="ts">
  const activeMobileMenu = ref(false)

  function toggleMobileMenu() {
    activeMobileMenu.value = !activeMobileMenu.value
  }

</script>
<template>
  <header class="lg:bg-blue-light flex justify-between items-center max-w-contant mt-10 lg:py-4 px-5 lg:px-10 rounded-lg">
    <LLogo class="hidden lg:block" />

    <LHeaderMobileVision
      class="lg:hidden"
      @click-toggle="toggleMobileMenu "
    />

    <LNavBarHeader class="hidden lg:flex"/>

    <div class="hidden lg:flex text-center gap-4">

      <LUserAvatar />

      <LButton> Book Now </LButton>

    </div>

    <LMobileMenu v-model="activeMobileMenu"/>
  </header>
</template>


<style scoped></style>