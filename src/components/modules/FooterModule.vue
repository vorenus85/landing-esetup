<template>
  <div class="footer-section">
    <div class="container mx-auto">
      <div class="footer-module flex items-center justify-between flex-col md:flex-row">
        <Logo variant="light" class="mt-5 md:mt-0 order-2 md:order-1" />
        <Menu class="order-1 md:order-2 footer-menu" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from '../Logo.vue'
import Menu from './Menu.vue'
</script>

<style lang="scss" scoped>
.footer-section {
  padding: 40px 0;
}
</style>
<style>
.footer-menu .menu-item {
  color: #fff;
}
</style>
