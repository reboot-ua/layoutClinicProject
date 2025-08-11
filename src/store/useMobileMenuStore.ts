import {defineStore} from "pinia";
import { ref } from "vue";

export const useMobileMenuStore = defineStore(
  'mobile-menu-store', ()=> {
    const activeMobileMenu =  ref(false)

    function openMobileMenu() { activeMobileMenu.value = true }

    function toggleMobileMenu() {activeMobileMenu.value = !activeMobileMenu.value}

    function closeMobileMenu() {activeMobileMenu.value = false}


    return {
      activeMobileMenu,
      toggleMobileMenu,
      openMobileMenu,
      closeMobileMenu
    }
  }
)