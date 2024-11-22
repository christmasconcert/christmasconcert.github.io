import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors:{
        'crimson-dawn-red':'#4C0000',
        'true-to-you':'#EFE8D8'
      }
    }
  },

  plugins: [typography]
} satisfies Config;
