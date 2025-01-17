<template>
  <div class="contact-us-section">
    <div class="container mx-auto relative" id="contact-us">
      <div class="contact-us-module pb-10">
        <div class="module-head pb-5">
          <h2 class="module-title">{{ title }}</h2>
        </div>
        <div class="module-body">
          <div class="module-description">{{ description }}</div>
          <div class="contact-us-form mt-10 mx-auto pt-10">
            <form
              class="flex gap-2 flex-col md:flex-row"
              @submit.prevent="submitForm"
              autocomplete="off"
            >
              <div class="form-element w-full">
                <input
                  class="w-full form-input"
                  id="email"
                  type="email"
                  v-model="email"
                  @blur="validateEmail"
                  :placeholder="form?.emailPlaceholder"
                />
                <div class="form-text py-2">
                  <span v-if="emailSuccess">{{ emailSuccess }}</span>
                  <span v-if="emailError">{{ emailError }}</span>
                </div>
              </div>

              <Button variant="primary" type="submit" :label="form?.cta"></Button>
            </form>
          </div>
        </div>
      </div>
      <img
        class="floating-element-1 float-animation-2 hidden lg:block"
        loading="lazy"
        alt="floating symbol"
        :src="imageUrl('contact_symbol_left.webp', '')"
        width="65"
        height="39"
      />
      <img
        class="floating-element-2 float-animation-3 hidden lg:block"
        loading="lazy"
        alt="floating symbol"
        :src="imageUrl('contact_symbol_right.webp', '')"
        width="89"
        height="94"
      />
    </div>
    <div class="container mx-auto pt-5 footer-menu" id="footer-menu">
      <FooterModule />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moduleData from '@/mock-data/contactUsSection.json'
import FooterModule from '../modules/FooterModule.vue'
import Button from '../Button.vue'
import { useEmailValidation } from '@/composables/useEmailValidation'
import { useImageUrl } from '../../composables/useImageUrl.js'

const { imageUrl } = useImageUrl()

const { email, emailError, emailSuccess, validateEmail } = useEmailValidation()
const title = ref(null)
const description = ref(null)
const form = ref(null)

const submitForm = () => {
  console.log('submitForm fired')
  validateEmail()
}

onMounted(() => {
  title.value = moduleData.data.title
  description.value = moduleData.data.description
  form.value = moduleData.data.form
})
</script>

<style lang="scss" scoped>
.floating-element-1 {
  position: absolute;
  left: 7%;
  top: 75%;
}

.floating-element-2 {
  position: absolute;
  right: 15%;
  top: 45%;
}

.contact-us-section {
  background: #0c111f;
  color: #fff;
  padding: 80px 0 0 0;
}

.contact-us-module {
  .module-title {
    font-weight: 400;
    letter-spacing: -0.5px;
    font-size: 24px;
    line-height: 36px;
    color: #fff;
  }

  .module-description {
    color: #fff;
    opacity: 0.6;
    text-align: center;
  }
}

.contact-us-form .btn {
  --btn-min-width: 160px;
  --btn-height: 60px;
  font-weight: 400;
}

.contact-us-form {
  max-width: 555px;
}

@media (min-width: 1024px) {
  .contact-us-section {
    padding: 110px 0 0 0;
  }

  .contact-us-module {
    .module-title {
      font-size: 36px;
      line-height: 50px;
    }
  }
}
</style>
