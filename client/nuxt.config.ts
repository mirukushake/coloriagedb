// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'assets/styles.scss',
    'primeicons/primeicons.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  build: {
    transpile: ['primevue'],
  },
  modules: ['@pinia/nuxt'],
});
