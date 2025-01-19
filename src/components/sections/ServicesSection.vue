<template>
  <div class="services-section pb-10 mb-5">
    <div class="container mx-auto" id="services">
      <div class="services-module">
        <div class="module-head">
          <h2 class="module-title pb-5">{{ title }}</h2>
          <h3 class="module-subtitle text-center pb-10">{{ subTitle }}</h3>
        </div>
        <div class="module-body">
          {{ description }}
        </div>
      </div>
      <div
        class="services-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 pt-10 lg:pt-2 text-center"
      >
        <div class="service" v-for="service in services" :key="service.id">
          <div class="service-icon-wrapper flex items-center justify-center">
            <div class="service-icon flex justify-center pb-5">
              <img
                :alt="service.title"
                :src="imageUrl(service.icon, folder)"
                loading="lazy"
                :width="110"
                :height="110"
              />
            </div>
          </div>
          <div class="service-name pb-5">{{ service.title }}</div>
          <div class="service-description pb-5">{{ service.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moduleData from '../../mock-data/servicesSection.json'
import { useImageUrl } from '@/composables/useImageUrl.js'
const folder = 'services/'
const { imageUrl } = useImageUrl()

const title = ref(null)
const subTitle = ref(null)
const description = ref(null)
const services = ref([])
onMounted(() => {
  title.value = moduleData.data.title
  subTitle.value = moduleData.data.subTitle
  description.value = moduleData.data.description
  services.value = moduleData.data.services
})
</script>

<style lang="scss" scoped>
.services-module {
  .module-subtitle {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
  }
}

.service-name {
  font-size: 1.15rem;
  font-weight: 700;
}

.service-description {
  color: #000000b2;
  font-size: 14px;
}

@media (min-width: 1024px) {
  .module-subtitle {
    font-size: 30px;
    line-height: 36px;
  }
}
</style>
