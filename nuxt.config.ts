export default defineNuxtConfig({
  app: {
    baseURL: '/Alia/',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap'
        }
      ]
    }
  },
  nitro: {
    preset: 'github-pages'
  },
  css: ['~/assets/style.css'],
  compatibilityDate: '2025-04-02'
})
