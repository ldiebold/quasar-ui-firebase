import { useEmailRegister } from 'firebase-composables'
import FirebaseRegisterForm from 'components/FirebaseRegisterForm.vue'
import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()
  const emailRegisterService = useEmailRegister()

  async function onRegisterClicked () {
    try {
      await emailRegisterService.register()
      router.push('/')
    } catch (error) {

    }
  }

  return {
    ...emailRegisterService,
    onRegisterClicked,
    router,
    FirebaseRegisterForm
  }
}
