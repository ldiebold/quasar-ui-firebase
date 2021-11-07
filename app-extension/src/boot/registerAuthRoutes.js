import { boot } from 'quasar/wrappers'
import { redirectIfAuthenticated, redirectIfUnauthenticated } from 'firebase-composables'

const publicRoutes = [
  'register',
  'login'
]

const authOnlyRoutes = [
  '/'
]

export default boot(({ router }) => {
  router.addRoute('/', {
    name: 'firebase.register',
    path: '/register',
    component: () => import('quasar-ui-firebase/src/components/FirebaseRegisterPage.vue')
  })

  router.addRoute('/', {
    name: 'firebase.login',
    path: '/login',
    component: () => import('quasar-ui-firebase/src/components/FirebaseSignInPage.vue')
  })

  router.beforeEach(route => {
    if (
      publicRoutes.includes(route.name) ||
      publicRoutes.includes(route.path)
    ) {
      redirectIfAuthenticated('/')
    }

    if (
      authOnlyRoutes.includes(route.name) ||
      authOnlyRoutes.includes(route.path)
    ) {
      redirectIfUnauthenticated('/login')
    }
  })
})
