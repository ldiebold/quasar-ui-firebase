<script setup>
import { useSignOut } from 'firebase-composables'
import { QBtn } from 'quasar'
import { useRouter } from 'vue-router'

const router = useRouter()

const { signOut, loading } = useSignOut()

async function onSignOutClicked () {
  await signOut()
  router.push('/login')
}
</script>

<template>
  <q-btn
    :loading="loading"
    @click="onSignOutClicked"
  />
</template>
