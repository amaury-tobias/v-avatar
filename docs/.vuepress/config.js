const path = require('path')

module.exports = {
  title: 'v-avatar',
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      description: 'vue avatar component'
    },
    '/es/': {
      lang: 'es-ES',
      description: 'componente avatar para vue.js'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Guide', link: '/guide/', ariaLabel: 'Guide' },
          { text: 'Demo', link: '/demo/', ariaLabel: 'Demo' }
        ]
      },
      '/es/': {
        selectText: 'Lenguaje',
        label: 'Español',
        ariaLabel: 'Lenguaje',
        editLinkText: 'Edita esta pagina en GitHub',
        nav: [
          { text: 'Guía', link: '/es/guide/', ariaLabel: 'Guía' },
          { text: 'Demo', link: '/es/demo/', ariaLabel: 'Demo' }
        ]
      }
    },
    repo: 'amaury-tobias/v-avatar',
    docsRepo: 'amaury-tobias/v-avatar',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    sidebar: 'auto'
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        components: [
          {
            name: 'v-avatar',
            path: path.resolve(__dirname, '../../src/component')
          }
        ]
      }
    ]
  ]
}
