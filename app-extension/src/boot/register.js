import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-quasar-ui-firebase'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
