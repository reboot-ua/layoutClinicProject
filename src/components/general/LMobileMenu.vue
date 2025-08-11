<script setup lang="ts">
import {useNuvStore} from "../../store/useNuvStore";
import {storeToRefs} from "pinia";

const navItems = storeToRefs(useNuvStore())

const modelValue = defineModel<boolean>('modelValue', {default: false})
</script>

<template>
  <div
    class="h-screen w-screen bg-white absolute top-0 left-0 overflow-hidden transition-all duration-500 flex flex-col items-center"
    :class="!modelValue && 'translate-x-full opacity-0'"
  >
    <ul class="flex flex-col items-center">
      <li v-for="item in navItems.value" :key="item.id">
        <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style scoped>

</style>
