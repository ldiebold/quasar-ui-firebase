<script setup>
import { QBtn } from 'quasar'
import useSignOut from 'firebase-actions/useSignOut'

const {
  loading,
  onSignOutClicked
} = useSignOut()
</script>

<template>
  <q-btn
    :loading="loading"
    @click="onSignOutClicked"
  />
</template>
