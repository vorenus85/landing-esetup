<template>
  <div class="price-section" id="price">
    <div class="container mx-auto">
      <div class="price-module">
        <div class="module-head">
          <h2 class="module-title pb-5">{{ title }}</h2>
          <h3 class="module-subtitle text-center pb-10">{{ subTitle }}</h3>
        </div>
        <div class="module-body"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moduleData from '@/mock-data/priceSection.json'
import { onMounted, ref } from 'vue'

const title = ref(null)
const subTitle = ref(null)
onMounted(() => {
  title.value = moduleData.data.title
  subTitle.value = moduleData.data.subTitle
})
</script>

<style lang="scss" scoped></style>
