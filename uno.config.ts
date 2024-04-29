// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
      ignoreAttributes: [':src']
    }),
    presetUno(),
    presetRemToPx()
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  variants: [],
  theme: {
    breakpoints: {},
    colors: {
      blue: '#0089ff',
      orange: '#ff6600',
      black: '#1f2429', // rgba(31, 36, 41, 1)
      grey: 'rgba(31, 36, 41, 0.6)',
      success: '#09bb07',
      warning: '#ffbe00',
      error: '#f44336',
      processing: '#4ca4fe'
    }
  },
  shortcuts: [],
  rules: [
    [
      /text-line-(\d+)/,
      ([, d]) => {
        return {
          display: '-webkit-box', // 需要设置为 -webkit-box 以使用 -webkit-line-clamp
          '-webkit-box-orient': 'vertical', // 设置方向为垂直
          overflow: 'hidden', // 隐藏超出容器的文本
          '-webkit-line-clamp': d // 限制在3行文本
        }
      }
    ],
    [
      /text-line-1/,
      () => {
        return {
          'white-space': 'nowrap', // 确保文本不会换行
          overflow: 'hidden', // 隐藏超出容器的文本
          'text-overflow': 'ellipsis' // 使用省略号表示文本被截断
        }
      }
    ]
  ]
})
