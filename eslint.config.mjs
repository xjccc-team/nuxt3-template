import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.vue'],
  rules: {
    'vue/multi-word-component-names': 0,
    // 禁用未声明变量，除非他们在/* global */注释中被提到
    'no-undef': 0,
    'vue/no-v-model-argument': 0,
    'vue/no-v-html': 0,
    camelcase: 0,
    complexity: 0,
    'no-mixed-operators': 0,
    'vue/valid-v-for': 0,
    'max-len': 0,
    'no-empty-function': 0,
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true }
    ]
  }
})
