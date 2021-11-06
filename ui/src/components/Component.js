import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'FirebaseRegisterForm',

  setup () {
    return () => h(QBadge, {
      class: 'FirebaseRegisterForm',
      label: 'FirebaseRegisterForm'
    })
  }
}
