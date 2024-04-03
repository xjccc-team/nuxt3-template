import removeConsole from 'vite-plugin-remove-console'
import type { PluginOption } from 'vite'
import type { NuxtAppConfig } from 'nuxt/schema'
// https://v3.nuxtjs.org/api/configuration/nuxt.config

const debug = process.env.NODE_ENV === 'development'
const cdnURL = ''
const lessHTTPS = ''
const plugins = [] as PluginOption[]

const globalScript: NuxtAppConfig['head']['script'] = []
if (!debug) {
  plugins.push(removeConsole())
}

if (debug) {
  globalScript.push(...[
    {
      src: 'https://s.kcimg.cn/wap/js/detail/vconsole.min.js'
    },
    {
      type: 'text/javascript',
      children: 'var vConsole = new VConsole()'
    }
  ])
}
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false
  },
  app: {
    buildAssetsDir: '/client/',
    cdnURL,
    head: {
      script: globalScript
    }
  },
  nitro: {
    output: {
      dir: '~/node-server',
      publicDir: '~/node-server/'
    }
  },
  features: {
    inlineStyles: false
  },
  experimental: {
    treeshakeClientOnly: false
  },
  sourcemap: debug,
  build: {
  },
  runtimeConfig: {},
  css: ['~/css/reset.css'],
  vite: {
    build: {
      cssTarget: 'chrome61',
      target: 'es2015'
    },
    plugins,
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@HTTPS: '${lessHTTPS}';`
        }
      }
    }
  },
  ignore: [],
  hooks: {
    // 'pages:extend' (routes) {}
  },
  modules: [
    'nuxt-error-and-cache',
    'nuxt-custom-fetch',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        disableVuex: true,
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
      }
    ]
  ]
})
