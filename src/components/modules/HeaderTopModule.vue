<template>
  <div class="header-top">
    <div class="container mx-auto flex justify-between">
      <Logo />
      <Menu />
      <Button label="Contact" variant="secondary-outlined"></Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../Button.vue'
import Menu from './Menu.vue'
import Logo from '../Logo.vue'
</script>

<style lang="scss" scoped>
.header-top {
}
</style>
