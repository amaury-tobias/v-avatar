---
prev: false
next: /demo/
---

# Guide

[[toc]]

## Instalation

```bash
npm install @amaury-tobias/v-avatar
```

## Usage

v-avatar is a UMD module, so it can be used in both a Vue and Nuxt instance as well as in a non-modular environment where `vAvatar` will be registered as a global variable.

## Vue

### As Vue component

```vue {3,8}
<template>
  ...
  <v-avatar username='John Doe'>
  ...
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

### Vue global component

```js
import Vue from 'vue'
import vAvatar from '@amaury-tobias/v-avatar'

Vue.use(vAvatar)
```

> The component is now registered globally

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

## Browser

> The component autoinstall in browser enviroment

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

## Properties

| Name            | Required |  Type   | Default |
| --------------- | :------: | :-----: | :-----: |
| username        |   :x:    | String  |  'V-A'  |
| initials        |   :x:    | String  |    -    |
| inline          |   :x:    | Boolean |  false  |
| src             |   :x:    | String  |    -    |
| :customStyle    |   :x:    | Object  |    -    |
| backgroundColor |   :x:    | String  |    -    |
| color           |   :x:    | String  |    -    |
| :lighten        |   :x:    | Number  |   80    |
| :size           |   :x:    | Number  |   50    |
| :rounded        |   :x:    | Boolean |  false  |

## Build Setup

```bash
# install dependencies
npm install

# serve whith hot reload al localhost:8080
npm run serve

# build
npm run build
```

### Unit testing

```bash
# Test with mocha y chai
npm test
```
