<script setup>
import { QInput, QForm } from 'quasar'

defineProps({
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
})

const emit = defineEmits([
  'update:email',
  'update:password'
])
</script>

<template>
  <q-form>
    <q-input
      filled
      label="Email"
      :model-value="email"
      class="q-mb-sm"
      @update:model-value="value => emit('update:email', value)"
    />
    <q-input
      filled
      type="password"
      label="Password"
      :model-value="password"
      class="q-mb-sm"
      @update:model-value="value => emit('update:password', value)"
    />
  </q-form>
</template>
