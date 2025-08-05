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
