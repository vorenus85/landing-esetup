<template>
  <div class="clients-section">
    <div class="container mx-auto" id="clients">
      <div class="clients-module">
        <div class="module-head">
          <h2 class="module-title">{{ title }}</h2>
        </div>
        <div class="module-body">
          {{ description }}
        </div>
      </div>
      <div class="clients-list">
        <div class="client" v-for="client in clients" :key="client.id">
          <div class="client-image-wrapper">
            <div class="client-image">{{ client.image }}</div>
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
.clients-section {
}
</style>
