<template>
  <div class="testemonial-section" id="testemonial">
    <div class="container mx-auto">
      <div class="testemonial-module grid grid-cols-1 lg:grid-cols-2">
        <div class="module-body">
          <div class="reviews-nav relative">
            <div class="prev carousel-nav flex" @click="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
              >
                <path
                  d="M19.6958 7.43548H2.48568M2.48568 7.43548C2.48568 7.43548 7.36397 4.22725 8.35524 1.56592M2.48568 7.43548C2.48568 7.43548 6.79826 10.45 8.35524 13.305"
                  stroke="currentColor"
                  stroke-width="2.17391"
                  stroke-linecap="square"
                />
              </svg>
            </div>
            <div class="next carousel-nav flex" @click="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
              >
                <path
                  d="M1.3042 7.43548H18.5143M18.5143 7.43548C18.5143 7.43548 13.636 4.22725 12.6448 1.56592M18.5143 7.43548C18.5143 7.43548 14.2017 10.45 12.6448 13.305"
                  stroke="currentColor"
                  stroke-width="2.17391"
                  stroke-linecap="square"
                />
              </svg>
            </div>
          </div>
          <div class="review-list">
            <Carousel v-bind="carouselConfig" ref="carouselRef">
              <Slide class="review" v-for="review in reviews" :key="review.id">
                <div class="review-item">
                  <div
                    class="review-image-wrapper relative z-10 flex items-start justify-start pb-3 pl-3"
                  >
                    <img
                      class="review-image"
                      :alt="review?.name"
                      :src="imageUrl(review?.image, folder)"
                      loading="lazy"
                      :width="50"
                      :height="50"
                    />
                  </div>
                  <div class="review-name py-1">{{ review.name }}</div>
                  <div class="review-stars flex gap-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      v-for="i in 5"
                      :key="i"
                    >
                      <path
                        d="M13.7976 10.74C13.6033 10.9283 13.5141 11.2005 13.5583 11.4675L14.2251 15.1575C14.2813 15.4703 14.1493 15.7868 13.8876 15.9675C13.6311 16.155 13.2898 16.1775 13.0101 16.0275L9.68831 14.295C9.57281 14.2335 9.44456 14.2005 9.31331 14.1968H9.11006C9.03956 14.2073 8.97056 14.2298 8.90756 14.2643L5.58506 16.005C5.42081 16.0875 5.23481 16.1168 5.05256 16.0875C4.60856 16.0035 4.31231 15.5805 4.38506 15.1343L5.05256 11.4443C5.09681 11.175 5.00756 10.9013 4.81331 10.71L2.10506 8.085C1.87856 7.86525 1.79981 7.53525 1.90331 7.2375C2.00381 6.9405 2.26031 6.72375 2.57006 6.675L6.29756 6.13425C6.58106 6.105 6.83006 5.9325 6.95756 5.6775L8.60006 2.31C8.63906 2.235 8.68931 2.166 8.75006 2.1075L8.81756 2.055C8.85281 2.016 8.89331 1.98375 8.93831 1.9575L9.02006 1.9275L9.14756 1.875H9.46331C9.74531 1.90425 9.99356 2.073 10.1233 2.325L11.7876 5.6775C11.9076 5.92275 12.1408 6.093 12.4101 6.13425L16.1376 6.675C16.4526 6.72 16.7158 6.9375 16.8201 7.2375C16.9183 7.53825 16.8336 7.86825 16.6026 8.085L13.7976 10.74Z"
                        fill="#F6973F"
                        :opacity="review.rating >= i ? 1 : 0.3"
                      />
                    </svg>
                  </div>
                  <div class="review-content pt-3 pb-5">{{ review.content }}</div>
                </div></Slide
              ></Carousel
            >
          </div>
        </div>
        <div class="module-head pt-5">
          <h2 class="module-title pb-5">{{ title }}</h2>
          <h3 class="module-subtitle pb-10">{{ subTitle }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moduleData from '@/mock-data/testemonialSection.json'
import { onMounted, ref } from 'vue'
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { useImageUrl } from '@/composables/useImageUrl.js'
const folder = 'reviews/'
const { imageUrl } = useImageUrl()

const next = () => {
  carouselRef.value.next()
}
const prev = () => {
  carouselRef.value.prev()
}

const carouselRef = ref()

const carouselConfig = {
  dir: 'ttb',
  wrapAround: true,
  itemsToShow: 1,
  snapAlign: 'center',
  height: '300px',
  gap: 5
}

const title = ref(null)
const subTitle = ref(null)
const reviews = ref([])

onMounted(() => {
  title.value = moduleData.data.title
  subTitle.value = moduleData.data.subTitle
  reviews.value = moduleData.data.reviews
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.testemonial-section {
  padding: 80px 0;
  background: #f7f7f7;
}

.testemonial-module {
  text-align: center;
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

  .module-body {
    display: flex;

    .reviews-nav {
      flex: 0 0 50px;
    }

    .review-list {
      flex: 0 0 calc(100% - 50px);
    }
  }
}

@media (min-width: 1024px) {
  .testemonial-module {
    .module-head {
      padding-left: 80px;
    }
    .module-title {
      font-size: 48px;
      line-height: 62.4px;
      letter-spacing: -0.01em;
      text-align: left;
    }

    .module-subtitle {
      font-size: 20px;
      line-height: 36px;
      text-align: left;
    }

    .module-body {
      .reviews-nav {
        flex: 0 0 75px;
      }

      .review-list {
        flex: 0 0 calc(100% - 75px);
      }
    }
  }
}

.carousel-nav {
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px 0;
  left: 0;

  &.prev {
    transform: rotate(90deg);
    bottom: calc(50% + 15px);
  }
  &.next {
    transform: rotate(90deg);
    bottom: calc(50% - 65px);
  }

  &:hover {
    color: #fff;
    background: $primary-color;
  }

  svg {
    transition: all 0.2s;
  }
}

.review-list {
  display: flex;
  align-items: center;
  justify-content: center;

  .review {
    padding: 0 1rem;
  }

  .review-item {
    width: 100%;
    text-align: left;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 20px;
    padding: 1rem 1.15rem;
    position: relative;
    color: #1e1e1e;

    &:before {
      content: '';
      width: 86px;
      height: 32px;
      background: url('/images/reviewer_bg.webp');
      display: block;
      position: absolute;
      top: -32px;
      left: 10px;
    }
  }

  .review-image {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 100%;
  }

  .review-image-wrapper {
    margin-top: -38px;
  }

  .review-name {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
  }

  .review-role {
    font-size: 12px;
    line-height: 17.34px;
    opacity: 0.7;
  }

  .review-content {
    font-size: 14px;
    line-height: 20.23px;
    opacity: 0.8;
  }

  .carousel__viewport {
    padding-top: 35px;
  }
}
</style>
