<script setup lang="ts">
import LNavBarFooter from "./LNavBarFooter.vue";
</script>

<style scoped></style>
<template>
  <div class="flex flex-col">
    <div class="flex items-center justify-between mb-12">
      <LLogo />
      <LNavBarFooter />
    </div>
    <div class="border-t-2 border-t-blue-dark mb-9 flex justify-between items-center pt-8">
      <div>
        All rights reserved ® uifry.com  | Terms and conditions apply!
      </div>
      <div>
        <LSocialMedia />
      </div>
    </div>
  </div>
</template>

