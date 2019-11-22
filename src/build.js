import component from './v-avatar.vue'

export const vAvatar = component

const plugin = {
  install(Vue) {
    if (this.installed) return
    this.installed = true
    Vue.component('v-avatar', vAvatar)
  }
}

//@ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  //@ts-ignore
  window.Vue.use(plugin)
}

export default plugin
