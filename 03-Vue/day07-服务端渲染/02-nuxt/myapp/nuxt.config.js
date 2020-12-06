export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'myapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
  router: {
    // 中间件的方式进行重定向.会自动从middleware文件夹下去查找名称为redirect的中间件文件
    // 每一次路由跳转的时候都会调用该中间件
    middleware: 'redirect',
    extendRoutes(routes) {
      routes.push({
        // 路由重定向,如果访问的是项目的根路径,就重定向到'/film/nowplaying'路径下
        path: "/",
        redirect: "/film/nowplaying"
      })
    }
  }
}
