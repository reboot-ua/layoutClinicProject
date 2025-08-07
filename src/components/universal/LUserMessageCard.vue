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
      return 'facebook.com'
    case 'instagram':
      return 'instagram.com'
    case 'linkedin':
      return 'linkedin.com'
    default:
      return ''

  }
})
</script>

<template>
  <div>
    <div>
      <div class="flex justify-between items-center">

        <div class="flex items-center">
          <div>
            <img :src="photo" :alt="name">
          </div>
          <div class=" flex flex-col items-center">
            <span>
              {{ name }}
            </span>
            <span>
              {{ position }}
            </span>
          </div>
        </div>

        <a :href="link" target="_blank">
          <img :src="iconPath" :alt="icon"/>
        </a>

      </div>
      <div>
        {{ message }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>