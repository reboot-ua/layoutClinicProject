<script setup lang="ts">

import {useNavStore} from "../../store/useNuvStore";

const { navItems } = storeToRefs(useNavStore())

const modelValue = defineModel<boolean>('modelValue', { default: false })

function closeMobileMenu() {
  modelValue.value = false
}
</script>

<template>
  <div
    class="h-screen w-screen bg-white fixed top-0 left-0 transition-all duration-500 flex flex-col items-center"
    :class="!modelValue && 'translate-x-full opacity-0'"
  >

    <div class="w-full py-10 px-5">
      <LHeaderMobileVision @click="closeMobileMenu" />
    </div>

    <ul class="flex-auto pb-20 flex gap-y-5 flex-col items-center justify-center">
      <li
        v-for="item in navItems"
        :key="item.id"
        class="text-b1"
        @click="closeMobileMenu"
      >
        <nuxt-link :to="item.route">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>