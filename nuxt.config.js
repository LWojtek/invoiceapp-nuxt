export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'invoicesapp-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css', integrity: 'sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    '~/assets/scss/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebaseInit.js',
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-uid-module'
  ],

  router: {
    extendRoutes (routes) {
      routes.push(
        {
          name: 'index',
          path: '/',
          component: '@/components/pages/index.vue'
        },
        {
          name: 'invoices',
          path: '/invoices',
          component: '@/components/pages/invoices.vue'
        },
        {
          name: 'invoice',
          path: '/invoices/:invoiceId',
          component: '~/components/pages/invoice.vue'
        }
        // {
        //   name: '404',
        //   path: '/404',
        //   component: '@/components/pages/index.vue'
        // }
      )
    },
    middleware: 'router'

  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
