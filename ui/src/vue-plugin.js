import FirebaseRegisterForm from './components/FirebaseRegisterForm.vue'
import FirebaseRegisterPage from './components/FirebaseRegisterPage.vue'
import FirebaseRegisterCard from './components/FirebaseRegisterCard.vue'
import FirebaseSignInPage from './components/FirebaseSignInPage.vue'
import FirebaseSignInCard from './components/FirebaseSignInCard.vue'
import FirebaseSignOutButton from './components/FirebaseSignOutButton.vue'

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
