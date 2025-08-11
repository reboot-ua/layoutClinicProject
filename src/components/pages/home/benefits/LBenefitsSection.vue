<script setup lang="ts">
const BenefitsList =
  [
    'Top quality dental team',
    'State of the art dental services',
    'Discount on all dental treatment',
    'Enrollment is quick and easy'
  ]
const PhotoPath = 'images/pages/main/benefit_image.png'
</script>

<template>
  <LSection
    class="bg-blue-light rounded-2lg flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between lg:py-14 lg:!px-24">
    <div class="max-w-full lg:max-w-lg">
      <LTitle class="pt-12 lg:pt-0">Why choose
        <LMarkedWord>Smile</LMarkedWord>
        for all your dental treatments?
      </LTitle>
      <LDescription>We use only the best quality materials on the market in order to provide the best products to our
        patients, So don’t worry about anything and book yourself.
      </LDescription>
      <LCustomList :items="BenefitsList"/>

      <LButton class="mt-8">Book an appointment</LButton>
    </div>
    <LPhoto :route="PhotoPath"/>
  </LSection>
</template>