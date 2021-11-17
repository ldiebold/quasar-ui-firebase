<script setup>
import { QCard, QBanner, QCardSection, QBtn } from 'quasar'
import FirebaseSignInForm from 'components/firebase/FirebaseSignInForm.vue'
import useSignIn from 'firebase-actions/useSignIn'

const {
  onSignInClicked,
  form,
  loading,
  error,
  hasError
} = useSignIn()
</script>

<template>
  <q-card>
    <q-card-section class="text-center">
      <FirebaseSignInForm
        v-model:email="form.email"
        v-model:password="form.password"
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
