<template>
  <div class="header-top">
    <div class="container mx-auto flex justify-between">
      <Logo />
      <Menu class="hidden lg:block" />
      <Button label="Contact" variant="secondary-outlined" @click="contact"></Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../Button.vue'
import Menu from './Menu.vue'
import Logo from '../Logo.vue'

const contact = () => {
  document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })
}
</script>
