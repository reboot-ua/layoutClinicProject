<script setup lang="ts">
import type {serviceIcon} from "../../../../types/servises";
import {onMounted} from "vue";
import LServicesCard from "./LServicesCard.vue";

const items: serviceIcon[] = [
  {
    icon: "teeth",
    title: "Root Canal Treatment",
    text: "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
    link: "/services"
  },
  {
    icon: "smile",
    title: "Cosmetic Dentist",
    text: "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
    link: "/services"
  },
  {
    icon: "implant",
    title: "Dental Implants",
    text: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
    link: "/services"
  },
]

const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

onMounted(() => swiper.instance)
</script>

<template>
  <LSection class="bg-blue-light pt-12 pb-8 !px-0 lg:!px-8 mb-12 flex flex-col lg:flex-row gap-6 lg:rounded-2lg">
    <div class="lg:hidden">
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide v-for="(item, i) of items"
                        :key="i"
                        class="px-5"
          >
            <LServicesCard
              :item="item"
            />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <div class="flex gap-5 items-center justify-center mt-10">
        <button
          @click="swiper.prev()"
          class="bg-white text-blue-dark px-7 py-2.5"
        >
          <img src="~/assets/images/icons/arrow_left.svg" alt="Arrow Left">
        </button>
        <button
          @click="swiper.next()"
          class="bg-white text-blue-dark px-7 py-2.5"
        >
          <img src="~/assets/images/icons/arrow_right.svg" alt="Arrow Right">
        </button>
      </div>
    </div>
    <LServicesCard
      v-for="(item, i) of items"
      :key="i"
      :item="item"
      class="hidden lg:flex"
    />
  </LSection>
</template>

<style scoped>

</style>