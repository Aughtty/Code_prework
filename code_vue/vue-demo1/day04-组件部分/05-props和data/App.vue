<template>
  <div id="app">
    <BaseCount :count="count" @changeCount="handleCount"></BaseCount>
  </div>
</template>

<script>

import BaseCount from './components/BaseCount.vue'
export default {
  components: {
    BaseCount
  },
  data(){
    return {
      count: 666
    }
  },
  methods: {
    handleCount(newCount) {
      console.log(newCount)
      this.count = newCount
    },
  }
}
</script>

<style>

</style>