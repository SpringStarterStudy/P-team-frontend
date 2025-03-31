export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/common.scss" as *;'
        }
      }
    }
  },

  compatibilityDate: '2025-03-30',
})