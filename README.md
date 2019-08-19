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
import vAvatar from '@amaury-tobias/v-avatar'

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
        el: '#app',
        components: {
          VAvatar
        }
      })
    </script>
  </body>
</html>
```

## Props

<table class="table">
<thead><tr>
  <th>Name</th><th>Required</th><th>Default</th><th>Type</th><th>Description</th>
</tr></thead>
<tbody>
  <tr><td>username</td>
    <td> Y </td>
    <td> - </td>
    <td> String </td>
    <td>Nombre utilizado para computar las iniciales.</td></tr>
  <tr><td>initials</td>
    <td> N </td>
    <td> - </td>
    <td> String </td>
    <td>Iniciales forzadas para sustituir a las computadas.</td></tr>
  <tr><td>inline</td>
    <td> N </td>
    <td> false </td>
    <td> Boolean </td>
    <td>display: inline-flex en lugar de flex</td></tr>
  <tr><td>src</td>
    <td> N </td>
    <td> - </td>
    <td> String </td>
    <td>Image Path.</td></tr>
  <tr><td>:customStyle</td>
    <td> N </td>
    <td> - </td>
    <td> Object </td>
    <td>CSS custom.</td></tr>
  <tr><td>backgroundColor</td>
    <td> N </td>
    <td> - </td>
    <td> String </td>
    <td>The avatar background color to use if no image is provided. If none
      is specified, a background color will be picked depending on
      the user name length.
      Especifica el color de fondo a utilizar si no se provee una imagen, el color de fondo se calcula en base a la longitud del nombre si no se da uno especifico.
      </td></tr>
  <tr><td>color</td>
    <td> N </td>
    <td> - </td>
    <td> String </td>
    <td>The font color used to render the user initials. If none
      is provided, the background color is used to compute
      the font color.
      Color utilizado para mostrar las iniciales del usuario, si no es asignada se calcula en base al color de fondo.
      </td></tr>
  <tr><td>:lighten</td>
    <td> N </td>
    <td> 80 </td>
    <td> Number </td>
    <td>A factor by which the background color must be lightened to
      produce the font color. Number between [-100,100].
      Valor utilizado para calcular la diferencia entre el color de fondo y de fuente, puede ser un valor entre [-100, 100].
      </td></tr>
  <tr><td>:size</td>
    <td> N </td>
    <td> 50 </td>
    <td> Number </td>
    <td>The avatar size in pixel.
    Tamaño del avatar en pixeles.
    </td></tr>
  <tr><td>:rounded</td>
    <td> N </td>
    <td> false </td>
    <td> Boolean </td>
    <td>True if the avatar must be rounded.
    True para mostrar el avatar redondo.
    </td></tr>
</tbody>
</table>

## Event

<table class="table">
<thead><tr>
  <th>Name</th><th>Arguments</th><th>Description</th>
</tr></thead>
<tbody>
  <tr><td>@avatar-initials</td>
    <td>username (the value of the username props),
      initials (the value of the computed initials or the initials props if any). username (en valor de la prop username), initials (el valor de las iniciales calculadas o las dadas en los props).</td>
    <td>This event is trigger when the component is ready with component
      username and initial. El evento es lanzado cuando el componente esta listo y las iniciales han sido calculadas.</td></tr>
</tbody>
</table>

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
