const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // npm run build 실행 시  타겟 디렉토리
  // 상대 주소 가능
  // outputDir: "C:/Users/jueon/git/lotion_api/lotion_api/src/main/resources/static",

  // npm run serve 실행 시 타겟 주소/포트 지정
  devServer: {
    host: 'localhost',
    port: 8080
  },
  lintOnSave:false
})
