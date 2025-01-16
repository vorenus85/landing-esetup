<template>
  <div class="container mx-auto">
    <div
      class="hero-section py-5 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-4 text-center md:text-left"
    >
      <div class="hero-top">
        <div class="hero-title pb-5">
          <h1 v-html="heroTitle"></h1>
        </div>
        <div class="hero-description px-5 md:px-0">
          <div class="hero-description-text pb-5" v-html="description"></div>
          <div class="hero-btn-container flex justify-center md:justify-start">
            <Button :label="cta" variant="primary"></Button>
          </div>
        </div>
      </div>
      <div class="hero-image float-animation">
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

<style lang="scss" scoped>
.hero-section {
  .hero-title h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.5;
  }

  .hero-top {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.hero-description-text {
  line-height: 42px;
  font-size: 18px;
}

.hero-btn-container .btn {
  --btn-min-width: 180px;
  --btn-height: 65px;
}

@media (min-width: 1024px) {
  .hero-section {
    .hero-top {
      padding: 3rem 0;
      margin-right: -2rem;
    }

    .hero-title h1 {
      font-size: 64px;
      line-height: 80px;
    }

    .hero-description {
      padding-right: 20%;
    }
  }
}
</style>
