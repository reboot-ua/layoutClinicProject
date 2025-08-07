import {defineStore} from "pinia";

export const useMobileMenuStore = defineStore(
  'mobile-menu-store ', ()=> {
    const activeMobileMenu =  ref(false)

    function openMobileMenu() { activeMobileMenu.value = true }

    function toggleMobileMenu() {activeMobileMenu.value = !activeMobileMenu.value}

    function clodMobileMenu() {activeMobileMenu.value = false}


    return {
      activeMobileMenu,
      toggleMobileMenu,
      openMobileMenu,
      clodMobileMenu
    }
  }
)