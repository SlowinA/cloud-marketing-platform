// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/devtools', '@nuxt/icon', '@nuxt/fonts', '@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxt/content', '@nuxt/scripts', 'nuxt-echarts',],
  css: ['~/assets/css/main.css'],
  echarts: {
    // Options
  },
  ui: {
    theme: {
      colors: [
        'cosmic-deep',
        'dark-aether',
        'emerald-energy',
        'graphite-thought',
        'magic-nebula',
        'night-abyss',
        'stardust',
        'stone-clarity',
        'quartz-dawn',
        'white-page',

        'primary',
        'secondary',
        'neutral',
        'info',
        'warning',
        'success',
        'error',
      ],
      defaultVariants: {
        color: 'neutral',
        size: 'sm'
      }
    }
  }
})