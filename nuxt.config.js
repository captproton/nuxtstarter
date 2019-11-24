module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Dice Media Group",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity:
          "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Unica+One"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: false,
  /*
   ** Build configuration
   */
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],
  modules: [
    // Simple usage
    "nuxt-vue-select"

    // With options
    // ['nuxt-vue-select', { /* module options */ }]
  ],
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
