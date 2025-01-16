<template>
  <div class="container mx-auto">
    <div class="hero-section">
      <div class="hero-top">
        <div class="hero-title">
          <h1 v-html="heroTitle"></h1>
        </div>
        <div class="hero-description">
          <div class="hero-description-text" v-html="description"></div>
          <div class="hero-btn flex">
            <Button :label="cta" variant="primary"></Button>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img :alt="banner.alt" :src="imageUrl(banner.image, folder)" fetchpriority="high" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useImageUrl } from '../../composables/useImageUrl.js'
import moduleData from '../../mock-data/heroModule.json'
import Button from '../Button.vue'
const folder = 'herobanner'
const { imageUrl } = useImageUrl()
const heroTitle = ref(null)
const description = ref(null)
const cta = ref(null)
const banner = ref({ alt: '', image: '' })

onMounted(() => {
  heroTitle.value = moduleData.data.title
  description.value = moduleData.data.description
  cta.value = moduleData.data.cta
  banner.value = moduleData.data.banner
})
</script>

<style lang="scss" scoped></style>
