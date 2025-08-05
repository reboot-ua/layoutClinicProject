<script setup lang="ts">
const user = ref({
  active: true,
  firstName: "joo",
  lastName: "doo",
avatar: '/user/user_icon.svg',
});
</script>
<template>
  <div class="relative">
    <div class="rounded-full overflow-hidden size-55">
      <NuxtImg :src="user.avatar" alt="user icon" />
    </div>
    <div
      v-if="user.active"
      class="rounded-full w-2.5 h-2.5 border border-white absolute top-1 right-1 bg-success"
    ></div>
  </div>
</template>
