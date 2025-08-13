<script setup lang="ts">
import LMeetSpecialistCard from "./LMeetSpecialistCard.vue";

import type {teamItem} from "../../../../types/teamItem";
import {onMounted} from "vue";

const items: teamItem[] = [
  {
    name: 'Jim Carry',
    position: 'Orthodontist.',
    profileLink: 'https://linkedin.com',
    photo: '/images/pages/main/meet/meet-user-1.png',
  },
  {
    name: 'Wade Warren',
    position: 'Endodontist.',
    profileLink: 'https://linkedin.com',
    photo: '/images/pages/main/meet/meet-user-2.png',
  },
  {
    name: 'Jenny Wilson',
    position: 'Periodontist.',
    profileLink: 'https://linkedin.com',
    photo: '/images/pages/main/meet/meet-user-3.png',
  },
  {
    name: 'Jacob Jones',
    position: 'Pediatric Dentist.',
    profileLink: 'https://linkedin.com',
    photo: '/images/pages/main/meet/meet-user-4.png',
  },
  {
    name: 'Jim Carry',
    position: 'Orthodontist.',
    profileLink: 'https://linkedin.com',
    photo: '/images/pages/main/meet/meet-user-1.png',
  },
  {
    name: 'Wade Warren',
    position: 'Endodontist.',
    profileLink: 'https://linkedin.com',
    photo: '/images/pages/main/meet/meet-user-2.png',
  },
  {
    name: 'Jenny Wilson',
    position: 'Periodontist.',
    profileLink: 'https://linkedin.com',
    photo: '/images/pages/main/meet/meet-user-3.png',
  },
  {
    name: 'Jacob Jones',
    position: 'Pediatric Dentist.',
    profileLink: 'https://linkedin.com',
    photo: '/images/pages/main/meet/meet-user-4.png',
  },

]
const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  spaceBetween: 16,
  slidesPerView: 4,
})
onMounted(() => swiper.instance)
</script>

<template>
  <LSection
    fullWidth
    background
    class="bg-blue-light rounded-2lg pt-16 lg:pt-14 mt-[100px] lg:mt-[120px]">
    <div class="max-w-full lg:max-w-lg lg:mx-auto flex flex-col lg:items-center">
      <LTitle>Meet our
        <LMarkedWord>Specialists</LMarkedWord>
      </LTitle>
      <LDescription class="text-start lg:text-center">We use only the best quality materials on the market in order to
        provide the best products to our
        patients.
      </LDescription>
    </div>
    <div  class="hidden lg:block">
      <client-only>
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide v-for="(item, key) in items"
                        :key
          >
            <LMeetSpecialistCard :item="item"/>
          </swiper-slide>
        </swiper-container>
      </client-only>
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
    </div>
    <div
      class="flex flex-col items-center gap-9 pb-12 lg:hidden"
    >
      <template
        v-for="(item, key) in items"
        :key
      >
        <LMeetSpecialistCard
          v-if="key < 2"
         :item="item"
        />
      </template>
      <LButton>View all Members</LButton>
    </div>
  </LSection>
</template>
