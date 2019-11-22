import { VueConstructor } from 'vue'
import { PluginObject } from 'vue'

export interface VAvatarProps {}

export interface vAvatar extends VueConstructor {
  props: VAvatarProps
}

interface VAvatarPluginObject extends PluginObject<any> {}
declare var VAvatar: VAvatarPluginObject
export default VAvatar
