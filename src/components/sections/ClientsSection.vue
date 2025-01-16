<template>
  <div class="clients-section">
    <div class="container mx-auto" id="clients">
      <div class="clients-module text-center mx-auto">
        <div class="module-head pb-5">
          <h2 class="module-title">{{ title }}</h2>
        </div>
        <div class="module-body">
          {{ description }}
        </div>
      </div>
      <div class="clients-list pt-5 flex gap-8 items-center justify-center flex-wrap">
        <div class="client px-5 py-3" v-for="client in clients" :key="client.id">
          <div class="client-image-wrapper">
            <div class="client-image">
              <img
                :alt="client?.name"
                :src="imageUrl(client?.image, folder)"
                loading="lazy"
                :width="client?.width"
                :height="client?.height"
              />
            </div>
          </div>
          <div class="client-name">{{ client.title }}</div>
          <div class="client-footer">
            <div class="client-type">{{ client.type }}</div>
            <div class="client-url">{{ client.url }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moduleData from '../../mock-data/clientsSection.json'
import { useImageUrl } from '@/composables/useImageUrl.js'
const folder = 'clients'
const { imageUrl } = useImageUrl()

const title = ref(null)
const description = ref(null)
const clients = ref([])
onMounted(() => {
  title.value = moduleData.data.title
  description.value = moduleData.data.description
  clients.value = moduleData.data.clients
})
</script>

<style lang="scss" scoped>
.clients-module {
  .module-body {
    font-size: 30px;
    line-height: 50px;
  }
}

@media (min-width: 1024px) {
  .clients-module {
    max-width: 625px;
  }
}
</style>
