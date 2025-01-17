<template>
  <div class="testemonial-section" id="testemonial">
    <div class="container mx-auto">
      <div class="testemonial-module">
        <div class="module-head">
          <h2 class="module-title pb-5">{{ title }}</h2>
          <h3 class="module-subtitle text-center pb-10">{{ subTitle }}</h3>
        </div>
        <div class="module-body">
          https://stackblitz.com/edit/vue3-carousel-example-vertical-m7mm8fti?file=src%2FApp.vue
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moduleData from '@/mock-data/testemonialSection.json'
import { onMounted, ref } from 'vue'

const title = ref(null)
const subTitle = ref(null)
onMounted(() => {
  title.value = moduleData.data.title
  subTitle.value = moduleData.data.subTitle
})
</script>

<style lang="scss" scoped></style>
