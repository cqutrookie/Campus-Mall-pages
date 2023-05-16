module.exports = {
  lintOnSave: false,
  devServer :{
    port:80,
    open:true,
    proxy:'http://localhost:8088',
  }
};

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false//关闭语法检查
// })
