<script setup lang="ts">

import type { clientItem } from "~/types/clientItem";
import LClientFeedbackCard from "./LClientFeedbackCard.vue";

const items: clientItem[] = [
  {
    name: 'Thomas Edison',
    photo: '/images/pages/main/client/client_foto_1.svg',
    feedback: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    stars: 4,
  },
  {
    name: 'Thomas daniel',
    photo: '/images/pages/main/client/client_foto_1.svg',
    feedback: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    stars: 5,
  },
  {
    name: 'Alena Alexl',
    photo: '/images/pages/main/client/client_foto_1.svg',
    feedback: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    stars: 3,
  },
  {
    name: 'Tomas Edward',
    photo: '/images/pages/main/client/client_foto_1.svg',
    feedback: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    stars: 5,
  },
  
];
const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 16,
  slidesPerView: 1,
  breakpoints: {
    780: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  }
})
onMounted(() => swiper.instance)

</script>

<template>
  <LSection class=" mt-[100px] lg:mt-[120px]">
    <div class="flex flex-col items-center mb-20">
      <LTitle>
        <LMarkedWord>Our Happy Clients</LMarkedWord>
      </LTitle>
      <LDescription class="text-center max-w-[600px]">
        We use only the best quality materials on the market in order to provide the best products to our patients, So
        don’t worry about anything and book yourself.
      </LDescription>
    </div>
    
    <ClientOnly>
      <swiper-container
        ref="containerRef"
        :init="false"
      >
        <swiper-slide v-for="(item, i) in items" :key="i">
          <LClientFeedbackCard :item="item" class="mx-0 lg:mx-5" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="flex gap-5 items-center justify-center mt-10 pb-14">
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
  </LSection>
</template>
