<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(item, key) in items"
        :key
        class="flex items-center gap-3 text-blue-dark text-b1 font-medium mb-3 last-of-type:mb-0"
      >
        <div>
          <img src="~/assets/images/icons/shield_icon.svg" alt="Shield icon">
        </div>
        <div>
          {{ item }}
        </div>
      </li>
    </ul>
  </div>
</template>
