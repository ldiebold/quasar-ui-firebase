import { useRouter } from 'vue-router'
import { useEmailSignIn } from 'firebase-composables'

export default () => {
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

  return {
    onSignInClicked,
    form,
    loading,
    error,
    hasError,
    signIn
  }
}
