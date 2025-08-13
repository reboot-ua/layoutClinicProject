<script setup lang="ts">
import type {teamItem} from "../../../../types/teamItem";

defineProps<{ item:teamItem }>()
</script>

<template>
  <div
    class="rounded-2lg p-4 relative flex flex-col justify-end w-full lg:max-w-[305px] aspect-square lg:h-[340px] overflow-hidden"
  >
    <img
      :src="item.photo"
      alt="Doctor photo"
      class="absolute left-0 top-0 h-full w-full object-cover"
    >
    <a
      :href="item.profileLink"
      target="_blank"
      class="absolute top-5 right-5"
    >
      <img
        src="/images/socialMedia/linkedin_s.svg"
        alt="linkedIn icon"
      />
    </a>
    <div
      class="relative bottom-4 bg-gradient-to-r from-blue-sky to-gray w-full pt-3 px-6 pb-5 text-white rounded-2lg">
      <h3 class="text-h4 font-semibold">{{ item.name }}</h3>
      <p class="text-b2 font-medium">{{ item.position }}</p>
    </div>
  </div>
</template>
