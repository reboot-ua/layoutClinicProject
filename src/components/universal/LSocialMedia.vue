<script setup lang="ts">
const socialList = ref([
  {
    id: '1',
    title: 'Facebook',
    url: 'https://www.facebook.com',
    icon: '/images/socialMedia/facebook.svg',
  },
  {
    id: '2',
    title: 'youtube',
    url: 'https://www.youtube.com',
    icon: '/images/socialMedia/youtube.svg',
  },
  {
    id: '3',
    title: 'twitter',
    url: 'https://wwwtwitter.com',
    icon: '/images/socialMedia/twitter.svg',
  },
  {
    id: '4',
    title: 'linkedIn',
    url: 'https://www.linkedIn.com',
    icon: '/images/socialMedia/linkedin.svg',
  },
  {
    id: '5',
    title: 'instagram',
    url: 'https://www.instagram.com',
    icon: '/images/socialMedia/instagram.svg',
  },

])
</script>

<template>
  <div>
    <ul class="flex gap-x-2.5 lg:gap-x-5 mt-2.5 lg:mt-0">
      <li
        v-for="item in socialList"
        :key="item.id"
        class="transition-all duration-500 opacity-50 lg:opacity-100 lg:hover:opacity-50"
      >
        <a :href="item.url" target="_blank">
          <img
            :src="item.icon"
            :alt="item.title"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>