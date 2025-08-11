<script setup lang="ts">
const modelValue = defineModel('modelValue', { default: '' })
</script>

<template>
  <div class="flex">
    <div class="flex items-center gap-2.5 w-full rounded-s-2lg border border-gray-100 pl-5">
      <div class="h-6 aspect-square">
<!--        <img src="~/assets/images/icons/call.svg" alt="Call icon" />-->
      </div>

      <input
        v-model="modelValue"
        type="number"
        placeholder="Enter your Phone Number"
        class="w-full"
      >
    </div>

    <LButton class="rounded-s-none">Submit</LButton>
  </div>
</template>