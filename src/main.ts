import Vue from 'vue'
import App from './App.vue'

import vAvatar from './build'

Vue.use(vAvatar)
//Vue.component('v-avatar', vAvatar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
