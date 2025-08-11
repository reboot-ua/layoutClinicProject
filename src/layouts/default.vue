<template>
  <div class="default-layout flex flex-col items-center min-h-screen max-w-max mx-auto lg:px-4 transition-all duration-500">
    <LHeader />
    <div class="flex-auto mt-10">
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