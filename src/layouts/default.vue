<template>
  <div class="flex flex-col min-h-screen">
    <LHeader />
    <div class="flex-auto">
      <slot />
    </div>
    <LFooter />
  </div>
</template>

<script setup lang="ts"></script>
