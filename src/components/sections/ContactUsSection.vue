<template>
  <div class="contact-us-section">
    <div class="container mx-auto" id="contact-us">
      <div class="contact-us-module">
        <div class="module-head">
          <h2 class="module-title">{{ title }}</h2>
        </div>
        <div class="module-body">
          <p>{{ description }}</p>
          <div class="contact-us-form">
            <form action="">
              <input type="email" :placeholder="form?.emailPlaceholder" />
              <button type="submit">{{ form?.cta }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto" id="footer-menu">
      <FooterModule />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moduleData from '@/mock-data/contactUsSection.json'
import FooterModule from '../modules/FooterModule.vue'

const title = ref(null)
const description = ref(null)
const form = ref(null)

onMounted(() => {
  title.value = moduleData.data.title
  description.value = moduleData.data.description
  form.value = moduleData.data.form
})
</script>

<style lang="scss" scoped>
.contact-us-section {
  background: #0c111f;
  color: #fff;
}
</style>
