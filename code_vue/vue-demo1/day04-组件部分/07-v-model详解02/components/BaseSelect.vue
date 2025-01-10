<template>
    <!-- 必须是change，不能是其他名字 -->
  <select :value="cityId" @change="changeCity">
    <option value="101">北京</option>
    <option value="102">上海</option>   
    <option value="103">广州</option>
    <option value="104">深圳</option>
    <option value="105">杭州</option>
  </select>
</template>

<script>
export default {
    props: {
        cityId: {
            type: String,
        }
    },
    methods: {
        changeCity(e) {
            // 事件名+参数名
            this.$emit('changeId', e.target.value)
            // console.log(e.target.value)
        }
    }
}
</script>

<style>

</style>