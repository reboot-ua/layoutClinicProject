<script setup lang="ts">
const props = withDefaults(defineProps<{
  fullWidth?: boolean
  background?: boolean
  bgColor?: string
  firsGradientSection?: boolean
}>(), {
  fullWidth: false,
  background: false,
  bgColor: 'bg-blue-light',
  firsGradientSection: false
})

const scapeFromTop = ref(0)

const sectionRef = ref<HTMLElement>()

onMounted(() => props.firsGradientSection && sectionRef.value
  && (scapeFromTop.value = sectionRef.value.getBoundingClientRect().top + window.scrollY))
</script>

<template>
  <section
    ref="sectionRef"
    class="px-5 max-w-contant mx-auto"
    :class="fullWidth && 'relative'"
  >
    <div
      v-if="firsGradientSection"
      :style="`height: calc(100% + ${scapeFromTop}px)`"
      class="bg-gradient-to-b from-blue-light to-white absolute w-screen bottom-0 left-1/2 -translate-x-1/2"
    />

    <div
      v-if="fullWidth"
      class="-z-10 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-screen"
      :class="background && bgColor"
    />

    <slot />
  </section>
</template>