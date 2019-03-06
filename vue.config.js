const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue-todolist/' : '/',
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('^@',resolve('src/common'))
      .set('~@',resolve('src/components'))
      .set('static',resolve('src/static'))
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.resolve(__dirname,'node_modules')],
      },
    },
  }
}