const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  },
  transpileDependencies: true,
  // npm run build 실행 시  타겟 디렉토리
  // 상대 주소 가능
  //outputDir: "C:/Users/jueon/git/LOTION-SPRING/lotion/lotion/src/main/resources/static",

  // npm run serve 실행 시 타겟 주소/포트 지정
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        ws: false,
        changeOrigin: true
     }
    }
  },
  lintOnSave:false
})
