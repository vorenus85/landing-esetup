<script setup>
import AboutUsSection from './components/sections/AboutUsSection.vue'
import ClientsSection from './components/sections/ClientsSection.vue'
import ContactUsSection from './components/sections/ContactUsSection.vue'
import HeaderSection from './components/sections/HeaderSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
</script>

<template>
  <HeaderSection /> <ClientsSection /> <AboutUsSection /><ServicesSection />
  <ContactUsSection />
</template>
<style lang="scss">
body {
  font-family: 'Montserrat', serif;
}
</style>
