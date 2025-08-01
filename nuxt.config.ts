import removeConsole from 'vite-plugin-remove-console'
import type { PluginOption } from 'vite'
import type { NuxtAppConfig } from 'nuxt/schema'
// https://v3.nuxtjs.org/api/configuration/nuxt.config

const debug = process.env.NODE_ENV === 'development'
const cdnURL = ''
const plugins = [] as PluginOption[]

const globalScript: NuxtAppConfig['head']['script'] = []
if (!debug) {
  plugins.push(removeConsole())
}

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    buildAssetsDir: '/client/',
    cdnURL,
    head: {
      script: globalScript
    }
  },

  nitro: {
    output: {
      dir: 'node-server',
      publicDir: 'node-server'
    }
  },

  features: {
    inlineStyles: false
  },

  sourcemap: debug,
  build: {},
  runtimeConfig: {},
  css: ['~/css/reset.css'],

  vite: {
    plugins
  },

  ignore: [],

  hooks: {
    // 'pages:extend' (routes) {}
  },

  modules: [
    'nuxt-custom-fetch',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
      }
    ],
    '@nuxt/eslint'
  ],

  compatibilityDate: '2025-07-23'
})
