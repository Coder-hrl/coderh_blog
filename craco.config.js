const path = require('path')
module.exports = {
  webpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
}
