<script setup>
import { useEmailSignIn, redirectIfAuthenticated } from 'firebase-composables'
import { QCard, QBanner, QCardSection, QBtn } from 'quasar'
import FirebaseSignInForm from './FirebaseSignInForm.vue'
import { useRouter } from 'vue-router'

redirectIfAuthenticated('/')

const router = useRouter()
const {
  form,
  loading,
  error,
  hasError,
  signIn
} = useEmailSignIn()

async function onSignInClicked () {
  try {
    await signIn()
    router.push('/')
  } catch (error) {

  }
}
</script>

<template>
  <q-card>
    <q-card-section class="text-center">
      <FirebaseSignInForm
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
        label="signIn"
        unelevated
        @click="onSignInClicked"
      />
    </q-card-section>
  </q-card>
</template>
