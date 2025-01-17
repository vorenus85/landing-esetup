<template>
  <div class="hire-section mb-10">
    <div class="container mx-auto" id="hire">
      <div class="hire-module relative grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="module-head">
          <h2 class="module-title pb-5 text-center md:text-left">{{ title }}</h2>
        </div>
        <div class="module-body flex items-center justify-center md:justify-end">
          <Button :label="cta" @click="getStarted"></Button>
        </div>
        <img
          class="floating-element-2 float-animation-2 hidden lg:block absolute"
          loading="lazy"
          alt="floating symbol"
          :src="imageUrl('symbol_2.webp', '')"
          width="65"
          height="39"
        />
        <img
          class="floating-element-3 float-animation-3 hidden lg:block absolute"
          loading="lazy"
          alt="floating symbol"
          :src="imageUrl('symbol_3.webp', '')"
          width="89"
          height="94"
        />
        <img
          class="floating-element-1 float-animation-3 hidden lg:block absolute"
          loading="lazy"
          alt="floating symbol"
          :src="imageUrl('symbol_1.png', '')"
          width="76"
          height="59"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import moduleData from '@/mock-data/hireSection.json'
import { onMounted, ref } from 'vue'
import Button from '../Button.vue'
import { useImageUrl } from '../../composables/useImageUrl.js'

const { imageUrl } = useImageUrl()

const title = ref(null)
const cta = ref(null)

const getStarted = () => {
  document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  title.value = moduleData.data.title
  cta.value = moduleData.data.cta
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.hire-module {
  background: $primary-color;
  border-radius: 20px;
  padding: 40px 30px;
  .module-title {
    color: #fff;
    font-size: 32px;
    line-height: 1.5;
    letter-spacing: -1.5px;
    text-wrap: initial;
  }

  .module-body {
    .btn {
      --btn-min-width: 260px;
      --btn-height: 70px;
      letter-spacing: 0.1em;
    }
  }
}

.floating-element-1 {
  right: 30px;
  top: calc(40% - 40px);
}

.floating-element-2 {
  left: 50%;
  bottom: 40px;
}

.floating-element-3 {
  left: 58%;
  top: 20%;
}

@media (min-width: 1024px) {
  .hire-module {
    padding: 100px 70px;
    .module-title {
      font-size: 34px;
      line-height: 50px;
    }
  }
}
</style>
