<!--使用vue可以便捷生成三个部分，分别是template、script、style--> 
<template>
  <div class="App">
    <!--以往三个组件都是在这里直接写的，但是现在需要划分到compoents中写 -->
    
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
    <!-- 主体组件 -->

    <!-- 底部组件 -->
  </div>
</template>

<script>
import HmHeader from './compoents/HmHeader.vue'
export default {
  components: {
    HmHeader
  }
}
</script>

<style>
.App {
  background-color: rgb(55, 0, 255);
  width:400px;
  height: 400px;
}
</style>