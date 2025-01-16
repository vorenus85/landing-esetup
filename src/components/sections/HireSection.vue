<template>
  <div class="hire-section">
    <div class="container mx-auto" id="hire">
      <div class="hire-module">
        <div class="module-head">
          <h2 class="module-title pb-5">{{ title }}</h2>
        </div>
        <div class="module-body">
          <Button :label="cta"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moduleData from '@/mock-data/hireSection.json'
import { onMounted, ref } from 'vue'
import Button from '../Button.vue'

const title = ref(null)
const cta = ref(null)
onMounted(() => {
  title.value = moduleData.data.title
  cta.value = moduleData.data.cta
})
</script>

<style lang="scss" scoped></style>
