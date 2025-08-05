<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const navItems = ref([
  {
    id: "1",
    label: "Home",
    href: "/",
    isActive: false,
  },
  {
    id: "2",
    label: "Services",
    href: "/services",
    isActive: false,
  },
  {
    id: "3",
    label: "Blog",
    href: "/blog",
    isActive: false,
  },
  {
    id: "4",
    label: "About",
    href: "/about",
    isActive: false,
  },
  {
    id: "5",
    label: "Contact",
    href: "/contact",
    isActive: false,
  },
]);
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
    class="flex text-center gap-x-10 text-blue-dark transition-all duration-200"
    :class="navBarActive ? 'opacity-100' : 'opacity-0'"
  >
    <ul v-for="item in navItems" :key="item.id">
      <li>
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
