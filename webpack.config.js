import { BootstrapVue3Resolver } from 'unplugin-vue-components/resolvers'
module.exports = {
    /* ... */
    plugins: [
      require('unplugin-vue-components/webpack')({ resolvers: [BootstrapVue3Resolver()] }),
    ],
  }