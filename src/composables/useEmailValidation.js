// composables/useEmailValidation.js
import { ref } from 'vue'

export function useEmailValidation() {
  const email = ref('')
  const emailError = ref(null)
  const emailSuccess = ref(null)

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.value) {
      emailError.value = 'Email is required.'
    } else if (!emailRegex.test(email.value)) {
      emailError.value = 'Please enter a valid email address.'
    } else {
      emailError.value = null
      emailSuccess.value = 'Form submitted successfully!'
    }
  }

  return {
    email,
    emailError,
    emailSuccess,
    validateEmail
  }
}
