import FirebaseRegisterPage from './pages/firebase/FirebaseRegisterPage.vue'
import FirebaseSignInPage from './pages/firebase/FirebaseSignInPage.vue'
import FirebaseRegisterForm from './components/firebase/FirebaseRegisterForm.vue'
import FirebaseRegisterCard from './components/firebase/FirebaseRegisterCard.vue'
import FirebaseSignInCard from './components/firebase/FirebaseSignInCard.vue'
import FirebaseSignOutButton from './components/firebase/FirebaseSignOutButton.vue'

// eslint-disable-next-line no-undef
const version = __UI_VERSION__

function install (app) {
  app.component(FirebaseRegisterForm)
  app.component(FirebaseRegisterPage)
  app.component(FirebaseRegisterCard)
  app.component(FirebaseSignInPage)
  app.component(FirebaseSignInCard)
  app.component(FirebaseSignOutButton)
}

export {
  version,
  FirebaseRegisterForm,
  FirebaseRegisterPage,
  FirebaseRegisterCard,
  FirebaseSignInPage,
  FirebaseSignInCard,
  FirebaseSignOutButton,

  install
}
