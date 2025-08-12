<script setup lang="ts">
import { useRoute } from "vue-router";
import {storeToRefs} from "pinia";
import {useNavStore} from "../../store/useNuvStore";
const route = useRoute();
const {navItems} = storeToRefs(useNavStore())

function checkPath() {
  const id = navItems.value.find((item) => item.href === route.path)?.id;
  id && isActiveMenu(id);
}
function isActiveMenu(id: string) {
  navItems.value = navItems.value.map((item) => ({
    ...item,
    isActive: item.id === id,
  }));
}
onMounted(checkPath);
const navBarActive = computed(() =>
  navItems.value.some((item) => item.isActive)
);
watch(() => route.path, checkPath)
</script>
<template>
  <nav
    :class="navBarActive ? 'opacity-100' : 'opacity-0'"
  >
    <ul    class="flex text-center gap-x-10 text-blue-dark transition-all duration-200"
    >
      <li  v-for="item in navItems" :key="item.id">
        <nuxt-link
          :href="item.href"
          class="text-b2"
          :class="item.isActive ? ' font-semibold' : 'font-semimedium'"
          @click="isActiveMenu(item.id)"
        >
          {{ item.label }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>
