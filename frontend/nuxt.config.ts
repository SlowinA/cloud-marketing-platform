// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          // --- System Designu: Kolory ---
          colors: {
            primary: { 'cosmic-deep': '#0A2E36', 'emerald-energy': '#33FF99' },
            accent: { 'magic-nebula': '#FF99DD', 'stardust': '#FFFF99' },
            dark: { 'night-abyss': '#10141D', 'dark-aether': '#1B212E', 'stone-clarity': '#ABB9D4' },
            light: { 'quartz-dawn': '#F5F7FA', 'white-page': '#FFFFFF', 'graphite-thought': '#3D4A5C' },
            functional: { success: '#34D399', error: '#F43F5E' },
          },

          // --- System Designu: Typografia, Cienie, Animacje (bez zmian) ---
          fontFamily: { sans: ['BrandSans', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
          fontSize: { 'xs': '12px', 'sm': '14px', 'base': '16px', 'lg': '32px', 'xl': '36px', '2xl': '44px' },
          boxShadow: { 'large': '0px 4px 16px 0px rgba(0, 0, 0, 0.12)', 'deep-below': '0px -4px 16px 0px rgba(0, 0, 0, 0.12)', 'deep-above': '0px 12px 40px 0px rgba(0, 0, 0, 0.20)' },
          transitionTimingFunction: { 'ease-in': 'cubic-bezier(0.4, 0, 1, 1)', 'ease-out': 'cubic-bezier(0, 0, 0.2, 1)', 'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)' },
          transitionDuration: { 'fast': '200ms', 'medium': '300ms', 'slow': '400ms' },

          // --- Zaktualizowane Gradienty: Stare i Nowe Cuda ---
          backgroundImage: {
            // Poprzednie gradienty
            'nebula-soft': "radial-gradient(circle at 30% 30%, #FFFF99, #FF99DD, #33FF99, #0A2E36)",
            'nebula-linear': "linear-gradient(135deg, #0A2E36, #33FF99, #FFFF99, #FF99DD)",
            'nebula-conic': "conic-gradient(from 90deg at 50% 50%, #0A2E36, #33FF99, #FFFF99, #FF99DD, #0A2E36)",
            'nebula-mesh': "radial-gradient(ellipse farthest-corner at 0% 0%, hsla(320, 100%, 80%, 0.6) 0%, transparent 50%), radial-gradient(ellipse farthest-corner at 0% 100%, hsla(197, 71%, 13%, 0.7) 0%, transparent 60%), radial-gradient(ellipse farthest-corner at 100% 0%, hsla(150, 100%, 60%, 0.7) 0%, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, hsla(60, 100%, 80%, 0.5) 0%, transparent 70%)",
            
            // --- NOWE CUDA ---
            'cosmic-rift': "linear-gradient(105deg, #10141D 49.9%, #33FF99 50%, #0A2E36 50.1%)",
            'stardust-cloud': "radial-gradient(ellipse 50% 50% at 50% 50%, hsla(60, 100%, 80%, 0.4), transparent 70%), linear-gradient(180deg, #1B212E 0%, #0A2E36 100%)",
            'aether-flow': "linear-gradient(0deg, transparent 0%, hsla(320, 100%, 80%, 0.2) 50%, transparent 100%), linear-gradient(90deg, #0A2E36, #1B212E)",
            'nebula-heart': "radial-gradient(circle at 50% 50%, #FF99DD, hsla(320, 100%, 80%, 0.4) 30%, #0A2E36 70%)",
            'event-horizon': "radial-gradient(circle at 20% 50%, #FFFF99 0%, hsla(60, 100%, 80%, 0) 25%), radial-gradient(circle at 80% 50%, #33FF99 0%, hsla(150, 100%, 60%, 0) 25%), linear-gradient(90deg, #10141D 0%, #000 70%)",
            'crystal-shine': "conic-gradient(from 180deg at 50% 50%, #0A2E36, #1B212E, #ABB9D4, #1B212E, #0A2E36)",
          },

          // --- Keyframes i Animacje ---
          keyframes: {
            moveGradient: {
              '0%, 100%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
            },
            subtlePulse: {
              '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
              '50%': { opacity: 0.6, transform: 'scale(1.1)' },
            }
          },
          animation: {
            'nebula-flow': 'moveGradient 15s ease infinite',
            'subtle-pulse': 'subtlePulse 10s ease-in-out infinite',
          },
        },
        screens: { 'xs': '320px', 'sm': '640px', 'md': '768px', 'lg': '1024px', 'xl': '1280px', 'xxl': '1920px' },
      },
    },
  },
})