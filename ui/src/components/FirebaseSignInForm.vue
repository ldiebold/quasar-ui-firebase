<script setup>
import { QInput, QForm } from 'quasar'
import { toRef, computed } from 'vue'
const merge = require('deepmerge')

const props = defineProps({
  form: {
    required: true,
    type: Object
  },

  emailLabel: {
    required: false,
    type: String,
    default: 'email'
  },

  passwordLabel: {
    required: false,
    type: String,
    default: 'password'
  },

  inputProps: {
    required: false,
    type: Object,
    default () {
      return {}
    }
  }
})

const emit = defineEmits(['update:form'])

const baseInputProps = {
  class: ['q-mb-sm']
}
const inputProps = computed(() => {
  return merge(props.inputProps, baseInputProps)
})

// Forms
const form = toRef(props, 'form')
function onFieldChange (field, value) {
  const change = {}
  change[field] = value
  emit('update:form', Object.assign({}, props.form, change))
}
</script>

<template>
  <q-form>
    <slot name="top" />
    <q-input
      :label="emailLabel"
      v-bind="inputProps"
      :model-value="form.email"
      @update:model-value="value => onFieldChange('email', value)"
    />
    <q-input
      type="password"
      :label="passwordLabel"
      v-bind="inputProps"
      :model-value="form.password"
      @update:model-value="value => onFieldChange('password', value)"
    />
    <slot name="bottom" />
  </q-form>
</template>
