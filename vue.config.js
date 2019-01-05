module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    logLevel: 'debug',
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/api': {
        logLevel: 'debug',
        target: 'https://aws.random.cat/meow',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/*': {
        logLevel: 'debug',
        target: 'http://localhost:6006/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/story': '',
          '^/': ''
        }
      },
    },
  },
}
