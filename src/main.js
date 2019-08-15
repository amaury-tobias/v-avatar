import Vue from 'vue'
import App from './App.vue'

import vAvatar from './entry'

Vue.config.productionTip = false

Vue.use(vAvatar)

new Vue({
  render: h => h(App)
}).$mount('#app')
