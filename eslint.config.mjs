import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default [
  {
    ignores: [
      'node_modules/*',
      'node-server/*',
      'dist/*',
      '.output',
      '.data',
      '.nuxt'
    ]
  },
  ...compat.config({
    env: {
      browser: true,
      node: true,
      es2021: true,
      'vue/setup-compiler-macros': true
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:nuxt/recommended'
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
      'vue/multi-word-component-names': 0,
      // 禁止出现未使用过的变量
      'no-unused-vars': [
        0,
        {
          vars: 'all',
          args: 'none'
        }
      ],
      // 启用 @typescript-eslint 的 no-unused-vars 规则
      '@typescript-eslint/no-unused-vars': [
        0,
        {
          vars: 'all',
          args: 'none'
        }
      ],
      // 禁用未声明变量，除非他们在/* global */注释中被提到
      'no-undef': 0,
      'vue/no-v-model-argument': 0,
      'vue/no-v-html': 0,
      camelcase: 0,
      complexity: 0,
      'no-mixed-operators': 0,
      'vue/valid-v-for': 0,
      'max-len': 0
    }
  })
]
