const path = require('path')
const sassResourcesLoader = require('craco-sass-resources-loader')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  rules: [
    {
      test: /\.scss$/,
      use: ['sass-loader'],
    },
  ],
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        // 内置的变量和函数,无需去引用,直接便可以使用
        resources: './src/assets/scss/global.scss',
      },
    },
  ],
}
