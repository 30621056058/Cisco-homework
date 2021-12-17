const externals = {
  '$': 'Jquery',
  'bootstrap': 'Bootstrap'
}


module.exports = {
  devServer: {
    disableHostCheck: false,
    host: "10.101.211.140",
    // 192.168.43.21
    // 10.101.211.140
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
  },
  chainWebpack: config => {
    // CND配置 不将依赖包打包进vendors
    config.set('externals', externals)
  }

  // configureWebpack: {
  //   plugins: [
  //     new MyAwesomeWebpackPlugin()
  //   ]
  // }
}