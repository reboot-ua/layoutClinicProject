<template>
  <div class="default-layout flex flex-col min-h-screen max-w-max mx-auto">
    <LHeader />
    <div class="flex-auto">
      <slot />
    </div>
    <LFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.default-layout {
  font-family: "GeneralSans", sans-serif;
}
</style>