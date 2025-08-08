<script setup lang="ts">
import DToothIcon from './LToothIcon.vue';
</script>

<template>
  <div class="relative">
    <!-- CIRCLES -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]
                bg-gradient-to-b from-blue to-white rounded-full w-11/12 aspect-square
                    shadow-firstScreenCircle rotate-12"
    >
      <div
        class="bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square"
        style="width: calc(100% - 2px);"
      />

      <div
        v-for="i in 24"
        :key="i"
        class="h-8 w-[52%] absolute right-1/2 top-1/2 bg-white origin-right"
        :style="`transform: translateY(-50%) rotate(${i * 20}deg)`"
      />

      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   bg-gradient-to-b from-blue/60 to-white rounded-full w-3/4 aspect-square"
      >
        <div
          class="bg-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style="width: calc(100% - 2px); height: calc(100% - 2px);"
        />

        <div
          v-for="i in 24"
          :key="i"
          class="h-6 w-[52%] absolute right-1/2 top-1/2 -translate-y-1/2 bg-white origin-right"
          :style="`transform: translateY(-50%) rotate(${i * 20}deg)`"
        />
      </div>
    </div>

    <!-- TOOTHS -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]
                rounded-full w-11/12 aspect-square rotate-12"
    >
      <div class="animate-spin-slow h-full w-full absolute">
        <div class="absolute top-0 left-1/2 -translate-y-1/2 -rotate-45"><DToothIcon class="animate-spin-slow-reverse" /></div>
        <div class="absolute bottom-0 left-1/2 translate-y-1/2"><DToothIcon class="animate-spin-slow-reverse" /></div>
        <div class="absolute top-1/2 right-0 rotate-12"><DToothIcon class="animate-spin-slow-reverse" /></div>
        <div class="absolute top-1/3 left-0 -translate-x-1/2 -rotate-45"><DToothIcon class="animate-spin-slow-reverse" /></div>
      </div>
    </div>

    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]
                rounded-full w-11/12 aspect-square rotate-12"
    >
      <div class="animate-spin-slow-reverse h-full w-full absolute">
        <div class="absolute top-1/3 left-3/4 -translate-y-10 scale-90 -rotate-45">
          <LToothIcon class="animate-spin-slow" />
        </div>

        <div class="absolute top-1/3 left-1/4 -translate-x-12 translate-y-24 scale-90 -rotate-45">
          <LToothIcon class="animate-spin-slow" />
        </div>
      </div>
    </div>

    <!-- PHOTO -->
    <div class="relative w-full overflow-hidden">
      <img
        src="~/assets/images/pages/main/doctor.png"
        alt="Doctor photo"
        class="relative -left-10"
      >
    </div>
  </div>
</template>