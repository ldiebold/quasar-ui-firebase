import { useSignOut } from 'firebase-composables'
import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()

  const { signOut, loading } = useSignOut()

  async function onSignOutClicked () {
    await signOut()
    router.push('/login')
  }

  return {
    signOut,
    loading,
    onSignOutClicked
  }
}
