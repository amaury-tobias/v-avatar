# v-avatar

[![Made with vue](https://img.shields.io/badge/SUPPORT-ME-F16061?style=for-the-badge&logo=ko-fi&labelCoor=F16061&logoColo0)](https://ko-fi.com/amaury_tobias)
[![Made with vue](https://img.shields.io/badge/MADE%20WITH-VUE-brightgreen?style=for-the-badge&logo=vue.js)](https://vuejs.org/)
[![Build Status](https://img.shields.io/travis/amaury-tobias/v-avatar?style=for-the-badge)](https://travis-ci.org/amaury-tobias/v-avatar)
[![npm](https://img.shields.io/npm/v/@amaury-tobias/v-avatar?style=for-the-badge)](https://www.npmjs.com/package/@amaury-tobias/v-avatar)
![npm bundle size](https://img.shields.io/bundlephobia/min/@amaury-tobias/v-avatar?style=for-the-badge)
[![NPM](https://img.shields.io/npm/l/@amaury-tobias/v-avatar?style=for-the-badge)](LICENSE)

Componente de Avatar para Vue.js

Este componente esta altamente inspirado y basado en el trabajo de https://github.com/eliep/vue-avatar, para recuperar y mantener un componente de mucha utilidad, agradecimientos totales.

Para el uso del componente es necesario:

- Dividir el username con espacios y guiones.
- Utiliza la primer letra de cada palabra del nombre.
- Utiliza hasta un maximo de tres letras iniciales.
- Si el nombre esta dividido en mas de tres partes y alguna de esta comienza con mayuscula, saltara aquellas que comienzen en minuscula.

Puedes encontrar algunos ejemplos [aquí](https://amaury-tobias.github.io/v-avatar/).

## Instalación

`npm install @amaury-tobias/v-avatar`

## Uso

v-avatar es un modulo UMD, por lo que puede ser utilizado en tanto en una instancia de Vue como en Nuxt como en un entorno non-modular donde `vAvatar` sera registrada como variable global.

### VUE COMPONENT

```js
<template>
<div>
  <v-avatar username='John Doe' />
</div>
</template>

<script>
import { vAvatar } from '@amaury-tobias/v-avatar'

export default {
  components: {
    vAvatar
  }
}
</script>
```

### OR GLOBAL

```js
import Vue from 'vue'
import vAvatar from '@amaury-tobias/v-avatar'

Vue.use(vAvatar)
```

### NUXT

`./plugins/vAvatar.js`

```js
import Vue from 'vue'
import vAvatar from '@amaury-tobias/v-avatar'

Vue.use(vAvatar)
```

`nuxt.config.js`

```js
module.exports = {
  plugins: ['~/plugins/vAvatar.js']
}
```

`*.vue <template>`

```html
<v-avatar username="John Doe" />
```

### Browser

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/@amaury-tobias/v-avatar"></script>
  </head>
  <body>
    <div id="app">
      <v-avatar username="Jon Doe"></v-avatar>
    </div>
    <script>
      var app = new Vue({
        el: '#app'
      })
    </script>
  </body>
</html>
```

## Props

| Name            | Required |  Type   | Default |
| --------------- | :------: | :-----: | :-----: |
| username        |    x     | String  |  'V-A'  |
| initials        |    x     | String  |    -    |
| inline          |    x     | Boolean |  false  |
| src             |    x     | String  |    -    |
| :customStyle    |    x     | Object  |    -    |
| backgroundColor |    x     | String  |    -    |
| color           |    x     | String  |    -    |
| :lighten        |    x     | Number  |   80    |
| :size           |    x     | Number  |   50    |
| :rounded        |    x     | Boolean |  false  |

## Build Setup

```bash
# install dependencies
npm install

# serve whith hot reload al localhost:8080
npm run serve

# build
npm run build
```

## Test

```bash
npm test
```

## License

Released under the [MIT](LICENSE) License.
