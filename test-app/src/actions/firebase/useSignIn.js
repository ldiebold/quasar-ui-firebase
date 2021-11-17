import { toRef, computed } from 'vue'
const merge = require('deepmerge')

const emit = defineEmits(['update:form'])

const baseInputProps = {
  class: ['q-mb-sm']
}
const inputProps = computed(() => {
  return merge(props.inputProps, baseInputProps)
})

const form = toRef(props, 'form')
function onFieldChange (field, value) {
  const change = {}
  change[field] = value
  emit('update:form', Object.assign({}, props.form, change))
}
