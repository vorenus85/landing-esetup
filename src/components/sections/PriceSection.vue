<template>
  <div class="price-section pt-10 pb-10" id="price">
    <div class="container mx-auto">
      <div class="price-module pb-10">
        <div class="module-head">
          <h2 class="module-title pb-5">{{ title }}</h2>
          <h3 class="module-subtitle text-center pb-5 mx-auto">{{ subTitle }}</h3>
        </div>
        <div class="module-body">
          <div class="packages grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              class="package-item my-5 flex flex-col justify-end"
              :class="`package-item-${index + 1}`"
              v-for="(packageItem, index) in packages"
              :key="packageItem.id"
            >
              <div class="popular-wrapper flex" v-if="index == 1">
                <div class="popular">Most popular</div>
              </div>

              <div class="package-price" :class="index == 1 ? 'pb-5' : 'pb-3'">
                <span class="value mr-3">{{ packageItem.price }}</span>
                <span class="label">/month</span>
              </div>
              <div class="package-name pb-3">{{ packageItem.name }}</div>
              <div class="package-description pb-3">{{ packageItem.description }}</div>
              <div class="package-advantages">
                <div
                  class="package-advantage-item pb-2"
                  v-for="advantage in packageItem.advantages"
                  :key="advantage.id"
                >
                  {{ advantage.label }}
                </div>
              </div>
              <div class="package-btn-wrapper py-3">
                <Button variant="secondary" label="Choose plan"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moduleData from '@/mock-data/priceSection.json'
import { onMounted, ref } from 'vue'
import Button from '../Button.vue'

const title = ref(null)
const subTitle = ref(null)
const packages = ref([])

onMounted(() => {
  title.value = moduleData.data.title
  subTitle.value = moduleData.data.subTitle
  packages.value = moduleData.data.packages
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.price-module {
  .module-title {
    font-size: 32px;
    line-height: 1.5;
    color: #1d1b1b;
  }

  .module-subtitle {
    font-size: 1.15rem;
    line-height: 30px;
    color: #1d1b1bb2;
  }
}

.popular {
  background: rgba(64, 49, 179, 1);
  color: rgba(244, 150, 209, 1);
  font-size: 10px;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  margin-bottom: 10px;
  align-self: end;
  margin-left: auto;
  font-weight: 600;
}

.package {
  &-item {
    padding: 0 30px;
    border-radius: 25px;

    .btn {
      width: 100%;
      border-radius: 25px;
      --btn-height: 45px;
    }

    .package-advantage-item {
      padding-left: 30px;
      position: relative;

      &:before {
        content: '';
        height: 20px;
        width: 20px;
        display: block;
        position: absolute;
        left: 0;
        top: 3px;
        background-image: url('/landing-esetup/images/check_light.svg');
      }
    }
  }

  &-item:not(.package-item-2) {
    .btn {
      background: rgba(244, 150, 209, 0.1);
      color: rgba(244, 150, 209, 1);

      &:hover {
        opacity: 0.5;
      }
    }
  }

  &-item-2 {
    padding: 30px;
    background: $primary-color url('/landing-esetup/images/popular_bg.png') no-repeat right center;
    color: #fff;
    filter: drop-shadow(0px 42px 34px #5243c24b);

    .package-price .label,
    .package-description {
      color: #fff;
    }

    .package-advantage-item {
      &:before {
        background-image: url('/landing-esetup/images/check_light_op.svg');
      }
    }
  }

  &-price {
    .value {
      font-size: 36px;
      font-weight: 700;
      line-height: 46px;
    }

    .label {
      font-size: 18px;
      line-height: 21.94px;
      color: #848199;
    }
  }

  &-name {
    font-size: 28px;
    font-weight: 700;
    line-height: 34.13px;
  }

  &-description {
    font-size: 15px;
    line-height: 20px;
    color: #848199;
  }
}

@media (min-width: 1024px) {
  .price-module {
    .module-title {
      font-size: 48px;
      line-height: 58.51px;
    }

    .module-subtitle {
      max-width: 470px;
    }

    .packages {
      padding: 0 80px;
    }
  }
}

@media (min-width: 1280px) {
  .price-module {
    .packages {
      padding: 0 220px;
    }
  }
}
</style>
