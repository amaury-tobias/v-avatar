import component from './component'

export const vAvatar = component

const plugin = {
  install(Vue) {
    if (this.installed) return
    this.installed = true
    Vue.component('v-avatar', vAvatar)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
