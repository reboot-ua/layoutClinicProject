<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useNavStore} from "../../store/useNuvStore";
const {navItems} = storeToRefs(useNavStore())

</script>
<template>
  <nav
    class="flex items-center gap-x-10 text-blue-dark"
  >
    <ul class="flex items-center gap-x-10 text-blue-dark ">
      <li v-for="item in navItems" :key="item.id"
        >
        <nuxt-link
          :href="item.href"
          class="text-b2"
        >
          {{ item.label }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>
