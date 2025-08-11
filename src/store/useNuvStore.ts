import {defineStore} from "pinia";
import { ref } from "vue";

export const useNuvStore = defineStore('nav-store', () => {
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
  return {
    navItems
  }
})