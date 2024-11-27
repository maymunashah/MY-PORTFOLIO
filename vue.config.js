const { defineConfig } = require('@vue/cli-service');
const path = require('path'); // Required to resolve paths

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Resolve '@' to the 'src' folder
      },
    },
  },
});
