//文件核心作用：导入App.vue文件，
//基于App.vue创建结构渲染index,html

//1.导入Vue核心包
import Vue from 'vue'
//2.导入App.vue文件
import App from './App.vue'

//提示：当前处于什么环境中（生产环境/开发环境）
Vue.config.productionTip = false

//3 Vue实例化 render方法用于 → 基于App.vue创建结构渲染 index.html
//注意：$mount('#app') → 挂载到index.html中id为app的元素上  ,方法等同于el:'#app'
new Vue({
  //el:'#app',
  
  //render函数的作用：渲染APP.vue组件
  //完整写法1: render: function (createElement) { return createElement(App) }
  //完整写法2: render: (createElement) => { return createElement(App) }
  render: h => h(App)
}).$mount('#app')
