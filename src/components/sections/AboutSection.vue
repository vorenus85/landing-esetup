<template>
  <div class="about-section">
    <div class="container mx-auto" id="about">
      <div class="about-module">
        <div class="module-image">[image]</div>
        <div class="module-body">
          <h2 class="module-title" v-html="title"></h2>
          <div class="module-description" v-html="description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moduleData from '../../mock-data/aboutSection.json'

const title = ref(null)
const description = ref(null)
onMounted(() => {
  title.value = moduleData.data.title
  description.value = moduleData.data.description
})
</script>

<style lang="scss" scoped>
.about-section {
  padding: 55px 0;
}
</style>
