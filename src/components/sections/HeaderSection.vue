<template>
  <section class="header-section">
    <HeaderTopModule></HeaderTopModule>
    <HeroModule></HeroModule>
  </section>
</template>

<script setup>
import HeaderTopModule from '../modules/HeaderTopModule.vue'
import HeroModule from '../modules/HeroModule.vue'
</script>

<style lang="scss" scoped>
.header-section {
  padding: 35px 0;
}
</style>
