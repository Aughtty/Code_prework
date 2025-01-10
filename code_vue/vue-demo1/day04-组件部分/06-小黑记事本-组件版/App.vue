<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter :totalTasks="list.length" @clear="clearAll"></TodoFooter>
    
  </section>
</template>

<script>
/*
1.拆分基本组件：
  1.头部组件：TodoHeader
  2.主体组件：TodoMain
  3.底部组件：TodoFooter
2.渲染功能：
  1.提供数据 → 提供在公共的父组件 App.vue
  2.通过父传子，将数据传递给 TodoMain
  3.使用 v-for 渲染列表

3.添加任务：
  1.在TodoHeader中 收集表单数据 → v-model
  2.监听事件（回车 + 点击 都要进行添加）
  3.子传父，将任务名称传递给父组件3
  4.父组件接收到任务名称，将任务添加到 list 中

4.删除功能
  1.监听事件（监听删除的点击） 需要携带id
  2.子传父，将删除的id传递给父组件App.vue
  3.父组件接收到id，删除对应的任务

5.底部合计和清空功能
  底部合计：父传子 传list.length  →渲染
  清空功能：子传父 传递一个清空的事件 → 父组件接收到事件，清空list

*/
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data () {
    return {
      list: [
        { id: 1, title: '吃饭' },
        { id: 2, title: '睡觉' },
        { id: 3, title: '打豆豆' }
      ]
    }
  },

  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  methods: {
    handleAdd(newTask) {
      this.list.push({
        id: this.list.length + 1,
        title: newTask,
      })
    },
    handleDel(id) {
      this.list = this.list.filter(item => item.id !== id)

    },
    clearAll() {
      //console.log('父组件进行清空')
      this.list = []
    }
  }
}
</script>

<style>

</style>
