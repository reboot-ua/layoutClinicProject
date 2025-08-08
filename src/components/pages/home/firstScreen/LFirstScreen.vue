<script setup lang="ts">

import LPhoneBlock from "./LPhoneBlock.vue";
</script>

<template>
  <LSection class="pt-7">
    <div>
      <h1 class="text-h2 mb-8 font-semibold">Get ready for your best ever Dental
        <LMarkedWord>Experience!</LMarkedWord>
      </h1>
      <p class="text-text text-b1">
        We use only the best quality materials on the market in order to provide the best products to our patients, So
        don’t worry about anything and book yourself.
      </p>
      <div class="flex items-center gap-x-4 mt-8 mb-12">
        <LButton> Get Started</LButton>
        <LPhoneBlock title="Dental 24H Emergency" phone="0900-78601"/>
      </div>
      <LUserMessageCard
        name="Thomas daniel"
        photo="/user/userPhoto.svg"
        position="Sr Dental"
        message="Top Quailty dental treatment done by field experts, Highly recommended for everyone"
        link="https://www.linkedin.com/"
        icon="linkedin"
      />
    </div>
    <div class="mt-14 relative">
      <div class="w-11/12 rounded-full border bordet-blue aspect-square">

      </div>
      <div class="relative w-full overflow-hidden">
        <img
          src="~/assets/images/pages/main/doctor.png"
          alt="Doctor"
          class="relative -left-10"
        />
      </div>
    </div>
  </LSection>
</template>
