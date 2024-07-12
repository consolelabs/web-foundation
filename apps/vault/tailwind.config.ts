import type { Config } from 'tailwindcss'
import { mochiui } from '@mochi-ui/theme'

const config = {
  darkMode: ['class'],
  content: [
    './**/*.{html,ts,tsx}',
    '!node_modules',
    './node_modules/@mochi-ui/theme/src/components/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {},
  },
  plugins: [mochiui(), require('tailwindcss-animate')],
} satisfies Config

export default config
