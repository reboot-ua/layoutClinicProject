<script setup lang="ts">
const emit = defineEmits<{
  clickToggle: []
}>()
</script>

<template>
 <div class="w-full flex justify-between items-center">
   <LLogo />
   <div
     class="lg:hidden bg-blue w-12 h-12 rounded-lg flex items-center justify-center"
     @click="emit('clickToggle')"
   >
     <img src="~/assets/images/icons/toggleIcon.svg" alt="Menu toggle icon">
   </div>
 </div>
</template>
