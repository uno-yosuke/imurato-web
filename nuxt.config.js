export default {
  router: {
    base: "/cp/dm202109/",
    // middleware: 'redirect'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'imurato',
    base: {
      href: 'router.base'
    },
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/overlay.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/animation.js',ssr: false},
    { src: '@/plugins/vue-scrollmagic.js',ssr: false },
    // { src: '@/plugins/redirect.js',ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    'nuxt-svg-loader',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:wght@100']
    }
  },
  generate: {
    routes: [
      '/dm2021_top/',
      '/dm2021_ttamura',
      '/dm2021_take',
      '/dm2021_sh-akamatsu',
      '/dm2021_yo-hidaka',
      '/dm2021_ha-aoyama',
      '/dm2021_ha-yamasaki',
      '/dm2021_ta-kanbara',
      '/dm2021_ko-terada',
      '/dm2021_hid-yamada',
      '/dm2021_yo-yamagiwa',
      '/dm2021_sh-kariya',
      '/dm2021_ko-takahashi',
      '/dm2021_hi-hokazono',
      '/dm2021_da-fukuda',
      '/dm2021_yu-takahashi',
      '/dm2021_tas-saito',
      '/dm2021_ry-ujino',
      '/dm2021_imubato',
      '/dm2021_sy-otsuki',
      '/dm2021_ju-inoue',
      '/dm2021_na-shimamura',
      '/dm2021_na-price',
      '/dm2021_sh-yasui',
      '/dm2021_a-suzuki',
      '/dm2021_yu-nagata',
      '/dm2021_na-tokoi',
      '/dm2021_ko-imura',
      '/dm2021_hide-takahashi',
      '/dm2021_ry-horiuchi',
      '/dm2021_sa-nakano',
      '/dm2021_se-yoshida',
    ],
    subFolders: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   extend (config, ctx) {
  //     config.output.publicPath = '/cp/dm202109/_nuxt/'
  //   }
  // }
}
