// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer:{
//     port:8888,
//   }
// })
module.exports = {
  devServer: {
    port: 8888, //设置本地默认端口 选填
    proxy: {//设置代理，必须填
      '/api': { //设置拦截器 拦截器格式 斜杠+拦截器名字，名字可以自己定
        target: 'http://172.26.96.139:8888', //代理的目标地址,后端跑的地址，用y总的可以填https://app165.acapp.acwing.com.cn
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^api':''
        }
      }
    }
  }
}