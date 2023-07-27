// 配置跨域代理
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true  ,//是否允许跨域
        pathRewrite: {  //重写路径
          '^/api': ''
        }
      }
    }
  }
}