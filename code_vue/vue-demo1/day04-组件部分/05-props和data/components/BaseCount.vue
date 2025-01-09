<template>
  <div class="base-count">
    <button @click="handleSub">-</button>
    <span>当前计数：{{ count }}</span>
    <button @click="handleAdd">+</button>
  </div>
</template>

<script>
export default {
   props: {
        count: {
        type: Number,
        required: true
        }
    },
    methods: {
        handleAdd() {
            this.$emit('changeCount', this.count + 1)
        },
        handleSub() {
            this.$emit('changeCount', this.count - 1)
        }
    }
}
</script>

<style>
.base-count {
  margin-top: 20px;
  text-align: center;
  
}
</style>