<script setup lang="ts">
import LNavBarFooter from "./LNavBarFooter.vue";
</script>

<style scoped></style>
<template>
  <footer class=" lg:pb-8 max-w-contant w-full mx-auto">
     <div class="flex items-center justify-between lg:pb-12 pb-8 px-5 lg:px-0">
      <LLogo />

      <LNavBarFooter class="hidden lg:flex"/>

      <div class="h-12 w-12 bg-blue-dark">
      </div>

    </div>

<!--    <div class="lg:hidden text-b2 px-5">-->
<!--      All our PRO level features at your fingertips.-->
<!--    </div>-->

    <div class="lg:hidden text-b1 font-semibold mx-5"> Follow Us</div>

    <div class="border-t border-gray lg:border-blue-dark flex justify-between items-center mx-5 lg:mx-0 pt-0 lg:pt-5 w-fit lg:w-full">
      <span class="hidden lg:inline">All rights reserved ® uifry.com  | Terms and conditions apply!</span>
      <LSocialMedia />
    </div>

      <div class=" p-1 lg:hidden mt-14 w-full flex justify-center items-center text-b3 font-medium text-white bg-blue-dark"> Uifry by M.Aze, CopyRights are protected by Uifry</div>

  </footer>
</template>

