<script setup lang="ts">
import LPhotoSection from "./LPhotoSection.vue";
</script>

<template>
  <LSection class="pt-7 flex flex-col lg:flex-row lg:items-end">
    <div class="lg:w-3/4">
      <h1 class="text-h2 lg:text-h1 mb-8">
        Get ready for your best ever
        <span class="lg:hidden">Dental</span>
        <LMarkedWord class="lg:hidden">Experience!</LMarkedWord>
        <LMarkedWord class="hidden lg:inline-block">Dental Experience!</LMarkedWord>
      </h1>

      <p class="text-b1 text-text">
        We use only the best quality materials on the market in order to provide the best products to our patients, So
        don’t worry about anything and book yourself.
      </p>

      <div class="mt-8 mb-12 flex items-center gap-x-4">
        <LButton>Get Started</LButton>

        <LPhoneBlock title="Dental 24H Emergency" phone="0900-78601"/>
      </div>

      <LUserMessageCard
        name="Thomas daniel"
        photo="/user/userPhoto.svg"
        position="Sr Dental"
        message="Top Quailty dental treatment done by field experts, Highly recommended for everyone"
        link="https://www.linkedin.com/"
        icon="linkedin"
        class="lg:w-94 lg:mb-20"
      />
    </div>

    <LPhotoSection class="mt-14"/>
  </LSection>
</template>
