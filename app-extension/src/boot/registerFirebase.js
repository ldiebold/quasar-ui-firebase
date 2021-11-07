import { boot } from 'quasar/wrappers'
import { firebasePlugin } from 'firebase-composables'
import config from 'app/config/firebase-config.js'

export default boot(({ app }) => {
  app.use(firebasePlugin, config)
})
