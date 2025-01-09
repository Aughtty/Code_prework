<template>
  <div class="App">
    <div class="box" @click="fn"></div>
  </div>
</template>

<script>
// 导出的是当前组件的配置对象
// 里面可以提供 data(特殊) methods computed watch 生命周期钩子等等

export default {
  data() {
    return {
      msg: 'Hello Vue'
    }
  },
  methods: {
    fn() {
      alert("你好")
    }
  }
}
</script>

<style>
.App {
  background-color: rgb(55, 0, 255);
  width:400px;
  height: 400px;
}
.App .box {
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
