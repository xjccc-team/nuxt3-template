// uno.config.ts
import { defineConfig, presetAttributify, transformerVariantGroup, transformerDirectives, presetWind3 } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

const STATIC = 'https://example.com/static'

export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
      ignoreAttributes: [':src']
    }),
    presetRemToPx(),
    presetWind3()
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  variants: [],
  theme: {
    STATIC,
    breakpoints: {},
    colors: {
      blue: '#0089ff',
      orange: '#ff6600',
      // black: '#1f2429', // rgba(31, 36, 41, 1)
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
      /^black(?:-(0(\.\d+)?)?)/,
      ([, d = '1']) => {
        return {
          color: `rgba(31, 36, 41, ${parseFloat(d)})`
        }
      }
    ],
    [
      /text-line-(\d+)/,
      ([, d]) => {
        return {
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          '-webkit-line-clamp': d
        }
      }
    ],
    [
      /text-line-1/,
      () => {
        return {
          'white-space': 'nowrap',
          overflow: 'hidden',
          'text-overflow': 'ellipsis'
        }
      }
    ]
  ]
})
