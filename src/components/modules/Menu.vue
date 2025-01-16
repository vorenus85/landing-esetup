<template>
  <div class="menu-module">
    <ul class="menu flex flex-col md:flex-row">
      <li v-for="item in menu" :key="item.id">
        <a :href="item.href" class="menu-item">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import moduleData from '@/mock-data/menu.json'
import { onMounted, ref } from 'vue'

const menu = ref([])

onMounted(() => {
  menu.value = moduleData.data
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.menu {
  gap: 10px;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: $body-text-color;

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: 5px;
      left: 0;
      background-color: $secondary-color;
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      color: $secondary-color;
      &:after {
        width: 100%;
      }
    }
  }
}
</style>
