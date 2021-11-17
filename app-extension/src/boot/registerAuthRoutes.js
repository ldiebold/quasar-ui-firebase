import { boot } from 'quasar/wrappers'
import { useAuthenticatedRedirector, useUnauthenticatedRedirector } from 'firebase-composables'
import { Loading } from 'quasar'

export default boot(({ router, app }) => {
  const authenticatedRedirector = useAuthenticatedRedirector('/dashboard', router)
  const unauthenticatedRedirector = useUnauthenticatedRedirector('/login', router)

  authenticatedRedirector.onChecked.value = () => Loading.hide()
  unauthenticatedRedirector.onChecked.value = () => Loading.hide()

  router.beforeEach((to, from) => {
    if (to.meta.authOnly) {
      Loading.show()
      unauthenticatedRedirector.execOnAuthStateEnsured()
    }

    if (to.meta.unauthOnly) {
      authenticatedRedirector.execOnAuthStateEnsured()
    }
  })

  router.addRoute('/', {
    name: 'firebase.register',
    path: '/register',
    meta: { unauthOnly: true },
    component: () => import('pages/firebase/FirebaseRegisterPage.vue')
  })

  router.addRoute('/', {
    name: 'firebase.login',
    path: '/login',
    meta: { unauthOnly: true },
    component: () => import('pages/firebase/FirebaseSignInPage.vue')
  })
})
