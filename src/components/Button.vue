<template>
  <div class="btn" :class="btnVariant">{{ label }}</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  variant: {
    type: String,
    default: 'secondary',
    validator: value => {
      const available = ['secondary', 'primary', 'secondary-outlined', 'primary-outlined']
      return available.includes(value)
    }
  }
})

const btnVariant = computed(() => {
  return 'btn-' + props.variant
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.btn {
  font-size: 1rem;
  min-width: 150px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:active,
  &:focus {
    opacity: 0.8;
  }

  &-secondary {
    color: #fff;
    background: $secondary-color;
  }

  &-secondary-outlined {
    border: 1px solid $secondary-color;
    color: $secondary-color;
    background: #fff;

    &:hover {
      color: #fff;
      background: $secondary-color;
    }
  }

  &-primary {
    color: #fff;
    background: $primary-color;
  }

  &-primary-outlined {
    border: 1px solid $primary-color;
    color: $primary-color;
    background: #fff;

    &:hover {
      color: #fff;
      background: $primary-color;
    }
  }
}
</style>
