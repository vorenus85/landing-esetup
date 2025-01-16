<template>
  <div class="about-us-section">
    <div class="container mx-auto" id="about-us">
      <div class="about-us-module grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="module-image order-2 lg:order-1">
          <img class="float-animation" :alt="image?.alt" :src="imageUrl(image?.name, folder)" />
        </div>
        <div class="module-body order-1 lg:order-2 py-5">
          <h2 class="module-title lg:text-start pb-5" v-html="title"></h2>
          <div class="module-description" v-html="description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moduleData from '../../mock-data/aboutUsSection.json'
import { useImageUrl } from '@/composables/useImageUrl.js'
const folder = 'about'
const { imageUrl } = useImageUrl()

const title = ref(null)
const description = ref(null)
const image = ref(null)
onMounted(() => {
  title.value = moduleData.data.title
  image.value = moduleData.data.image
  description.value = moduleData.data.description
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.about-us-section {
  padding: 55px 0;
}

.about-us-module {
  .module-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .module-title {
    color: $body-text-color;
    font-size: 32px;
    line-height: 1.5;
  }

  .module-description {
    font-size: 1.15rem;
  }
}

@media (min-width: 1024px) {
  .about-us-module {
    .module-title {
      font-size: 48px;
      line-height: 60px;
    }
  }
}
</style>
<style lang="scss">
.about-us-module .module-description {
  opacity: 0.7;
}

.about-us-module .module-body li {
  padding-left: 30px;
  position: relative;
  padding-bottom: 15px;
  &:before {
    content: '';
    height: 20px;
    width: 20px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('/esetup/images/check.png');
  }
}
</style>
