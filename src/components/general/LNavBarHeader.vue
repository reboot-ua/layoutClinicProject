<script setup lang="ts">
const navItems = ref([
  {
    id: "1",
    label: "Home",
    href: "/",
    isActive: true,
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

function isActiveMenu(id:string) {
  navItems.value=navItems.value.map(item => ({ ...item, isActive: item.id === id}))
}
</script>
<template>
  <nav class="flex text-center gap-x-10 text-blue-dark">
    <ul v-for="item in navItems" :key="item.id" >
      <li>
        <nuxt-link :href="item.href"
        class="text-b2"
        :class="item.isActive ?' font-semibold': 'font-semimedium'"
        @click="isActiveMenu(item.id)"
        >
        {{ item.label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
