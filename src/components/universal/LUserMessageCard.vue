<script setup lang="ts">
import {computed} from "vue";

interface Props {
  photo: string,
  name: string,
  position: string,
  message: string,
  link: string,
  icon: 'linkedin' | 'facebook' | 'instagram',
}

const props = defineProps<Props>()

const iconPath = computed(() => {
  switch (props.icon) {
    case 'facebook':
      return ''
    case 'instagram':
      return ''
    case 'linkedin':
      return '/images/icons/in.png'
    default:
      return ''

  }
})
</script>

<template>
  <div class="shadow-userMessageCard rounded-2xl px-5 pt-3 pb-4">

    <div class="flex justify-between items-center">

      <div class="flex items-center gap-x-2">
        <div class="h-10 w-10 rounded-full">
          <img :src="photo" :alt="name">
        </div>
        <div class=" flex flex-col items-start justify-center">
            <span class="text-b3 font-medium text-blue-dark">
              {{ name }}
            </span>
          <span class="text-b4 text-blue-dark">
              {{ position }}
            </span>
        </div>
      </div>

      <a :href="link" target="_blank">
        <img :src="iconPath" :alt="icon"/>
      </a>

    </div>
    <div class="text-b4 text-blue-dark mt-2.5 max-w-[300px]">
      {{ message }}
    </div>

  </div>
</template>

<style scoped>

</style>