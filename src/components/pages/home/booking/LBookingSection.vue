<script setup lang="ts">

import LDescription from "../../../universal/LDescription.vue";
import LPhoneForm from "../../../universal/form/LPhoneForm.vue";

const phone = ref('')
</script>

<template>
  <LSection class="mb-[120px]">
    <div class="flex flex-col lg:flex-row lg: justify-between w-full">
      <div class="lg:flex lg:flex-col max-w-lg">
        <LTitle class="pt-10"> We’re
          <LMarkedWord>welcoming</LMarkedWord>
          new patients and can’t wait to meet you.
        </LTitle>
        <LDescription> We use only the best quality materials on the market in order to provide the best products to our
          patients, So don’t worry about anything and book yourself.
        </LDescription>

        <LPhoneForm v-model="phone"/>
      </div>
      <LPhotoSection photo-name="foto_1.png"/>
    </div>
  </LSection>
</template>

<style scoped>

</style>