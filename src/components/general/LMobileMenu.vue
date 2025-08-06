<script setup lang="ts">
import {useNuvStore} from "../../store/useNuvStore";
import {storeToRefs} from "pinia";

const { navItems } = storeToRefs(useNuvStore())

const modelValue = defineModel<boolean>('modelValue', {default: false})

function closeMobileMenu() {
  modelValue.value=false
}
</script>

<template>
  <div
    class="h-screen w-screen bg-white fixed top-0 left-0 overflow-hidden transition-all duration-500 flex flex-col items-center"
    :class="!modelValue && 'translate-x-full opacity-0'"
  >
    <div class="w-full  flex justify-between items-center my-10 px-5">

      <LHeaderMobileVision
        @click="closeMobileMenu"
      />
    </div>

    <ul class="flex flex-col items-center gap-y-5 mt-10">
      <li v-for="item in navItems"
          :key="item.id"
          class="text-b2"
      >
        <NuxtLink :to="item.href" @click="closeMobileMenu">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
