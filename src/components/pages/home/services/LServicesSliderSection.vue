<script setup lang="ts">
import LCard from "./LCard.vue";
import type { serviceIcon } from "../../../../types/servises";

const items: serviceIcon[] = [
  {
    icon:"teeth",
    title:"Root Canal Treatment",
    text:"Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
    link:"/services"
  },
  {
    icon:"smile",
    title:"Cosmetic Dentist",
    text:"Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
    link:"/services"
  },
  {
    icon:"implant",
    title:"Dental Implants",
    text:"A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
    link:"/services"
  },
]
</script>

<template>
  <LSection class="bg-blue-light py-12 px-5 mb-52 flex flex-col">
    <LCard
    v-for="(item, i) of items"
    :key="i"
    :item="item"
    class="mb-4"
    />
  </LSection>
</template>

<style scoped>

</style>