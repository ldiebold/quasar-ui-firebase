<script setup>
import { useEmailRegister, redirectIfAuthenticated } from 'firebase-composables'
import { QCard, QBanner, QCardSection, QBtn } from 'quasar'
import FirebaseRegisterForm from './FirebaseRegisterForm.vue'
import { useRouter } from 'vue-router'

redirectIfAuthenticated('/')

const router = useRouter()
const {
  form,
  loading,
  error,
  hasError,
  register
} = useEmailRegister()

async function onRegisterClicked () {
  try {
    await register()
    router.push('/')
  } catch (error) {

  }
}
</script>

<template>
  <q-card>
    <q-card-section class="text-center">
      <FirebaseRegisterForm
        v-model:form="form"
        :input-props="{
          filled: true
        }"
      />

      <q-banner
        v-if="hasError"
        rounded
        class="bg-negative q-mt-sm text-white"
      >
        {{ error.message }}
      </q-banner>

      <q-btn
        :loading="loading"
        class="q-mt-sm"
        color="primary"
        label="register"
        unelevated
        @click="onRegisterClicked"
      />
    </q-card-section>
  </q-card>
</template>
