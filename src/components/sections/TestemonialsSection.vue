<template>
  <div class="testemonial-section" id="testemonial">
    <div class="container mx-auto">
      <div class="testemonial-module">
        <div class="module-head pt-5">
          <h2 class="module-title pb-5">{{ title }}</h2>
          <h3 class="module-subtitle text-center pb-10">{{ subTitle }}</h3>
        </div>
        <div class="module-body"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moduleData from '@/mock-data/testemonialSection.json'
import { onMounted, ref } from 'vue'

const title = ref(null)
const subTitle = ref(null)
onMounted(() => {
  title.value = moduleData.data.title
  subTitle.value = moduleData.data.subTitle
})
</script>

<style lang="scss" scoped>
.testemonial-section {
  padding: 80px 0;
  background: #f7f7f7;
}

.testemonial-module {
  .module-title {
    color: #0c111f;
    font-size: 32px;
    line-height: 1.5;
    letter-spacing: -0.01em;
  }

  .module-subtitle {
    opacity: 0.6;
    font-size: 1rem;
    line-height: 1.5;
  }
}

@media (min-width: 1024x) {
  .testemonial-module {
    .module-title {
      font-size: 48px;
      line-height: 62.4px;
      letter-spacing: -0.01em;
    }

    .module-subtitle {
      font-size: 20px;
      line-height: 36px;
    }
  }
}
</style>
