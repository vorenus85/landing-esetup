<template>
  <button class="btn" :type="type" :class="btnVariant">{{ label }}</button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'button',
    validator: value => {
      const available = ['button', 'submit']
      return available.includes(value)
    }
  },
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
  --btn-min-width: 150px;
  --btn-height: 50px;
  font-size: 1rem;
  min-width: var(--btn-min-width);
  line-height: var(--btn-height);
  text-align: center;
  height: var(--btn-height);
  border-radius: 5px;
  font-weight: 700;
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
    &:hover {
      transform: scale(1.1);
    }
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

    &:hover {
      transform: scale(1.1);
    }
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
