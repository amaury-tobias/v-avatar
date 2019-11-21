import vAvatar from './v-avatar.vue'
import { PluginObject } from 'vue'

const plugin: PluginObject<any> = {
  install(Vue) {
    Vue.component('v-avatar', vAvatar)
  }
}
//@ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  //@ts-ignore
  window.Vue.use(plugin)
}

export default plugin
