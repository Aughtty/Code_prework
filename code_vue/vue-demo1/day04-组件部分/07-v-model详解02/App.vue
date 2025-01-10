<template>
  <!-- 为了使用 v-model
      cityId需要更改为value
      事件名需要更改为input -->
  <BaseSelect :cityId="selectId" @changeId="selectId=$event"></BaseSelect>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
    components: {
        BaseSelect
    },
    data() {
        return {
            selectId: '103'
        }
    },
    
}
</script>

<style>

</style>