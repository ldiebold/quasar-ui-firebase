<script setup>
import { useEmailRegister } from 'firebase-composables'
import { FirebaseRegisterForm } from 'ui'

const {
  form
} = useEmailRegister()
</script>

<template>
  <q-page padding>
    <FirebaseRegisterForm
      v-model:form="form"
    />
  </q-page>
</template>
