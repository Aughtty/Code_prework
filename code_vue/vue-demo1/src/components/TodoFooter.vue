<template>
  <!-- 统计和清空 -->
  <footer class="footer">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong>{{ totalTasks }} </strong></span>
      <!-- 清空 -->
      <button class="clear-completed" @click="clearAll">
        清空任务
      </button>
    </footer>
</template>

<script>
export default {
    props: {
        totalTasks: {
            type: Number,
            required: true
        }
    },
    methods: {
        clearAll() {
            //console.log('清空任务')
            this.$emit('clear')
        }
    }
}
</script>

<style>

</style>