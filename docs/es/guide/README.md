---
prev: false
next: /es/demo/
---

# Guía

[[toc]]

## Instalación

```bash
npm install @amaury-tobias/v-avatar
```

## Uso

v-avatar es un modulo UMD, por lo que puede ser utilizado en tanto en una instancia de Vue como en Nuxt como en un entorno non-modular donde `vAvatar` sera registrada como variable global.

## Vue

### Como componente de Vue

```vue {3,8}
<template>
  ...
  <v-avatar username='John Doe'>
  ...
</template>

<script>
  import vAvatar from '@amaury-tobias/v-avatar'

  export default {
    components: {
      vAvatar
    }
  }
</script>
```

### Global en vue

```js
import Vue from 'vue'
import vAvatar from '@amaury-tobias/v-avatar'

Vue.use(vAvatar)
```

> El componente queda registrado de manera global

## Nuxt

> `./plugins/vAvatar.js`

```js
import Vue from 'vue'
import vAvatar from '@amaury-tobias/v-avatar'

Vue.use(vAvatar)
```

> `nuxt.config.js``

```js {3}
module.exports = {
  ...
  plugins: ['~/plugins/vAvatar.js']
  ...
}
```

> `pages/**/*.vue`

```vue
<v-avatar username="John Doe" />
```

## Navegador

> El componente se autoinstala en entornos de navegadro

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

## Propiedades

| Nombre          |     Requerido      |  Tipo   |
| --------------- | :----------------: | :-----: |
| username        | :white_check_mark: | String  |
| initials        |        :x:         | String  |
| inline          |        :x:         | Boolean |
| src             |        :x:         | String  |
| :customStyle    |        :x:         | Object  |
| backgroundColor |        :x:         | String  |
| color           |        :x:         | String  |
| :lighten        |        :x:         | Number  |
| :size           |        :x:         | Number  |
| :rounded        |        :x:         | Boolean |

## Eventos

> El evento en lanzado cuando el componente esta listo y ha calculado `initials` en base a `username`

| Nombre           | Argumentos            |
| ---------------- | --------------------- |
| @avatar-initials | `username` `initials` |

## Build Setup

```bash
# install dependencies
npm install

# serve whith hot reload al localhost:8080
npm run serve

# build
npm run build
```

### Pruebas unitarias

```bash
# Test con mocha y chai
npm test
```
