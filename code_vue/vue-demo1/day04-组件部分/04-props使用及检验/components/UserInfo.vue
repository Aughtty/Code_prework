<template>
  <div class="userinfo">
    <h3>我是个人信息组件</h3>
    <p>姓名: {{ username }}</p>
    <p>年纪: {{ age }}</p>
    <p>是否单身:{{ isSingle }}</p>
    <p>座驾：{{ car }}</p>
    <p>兴趣爱好：{{ hobby }}</p>
  </div>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        isSingle: {
            type: Boolean,
            required: true
        },
        car: {
            type: String,
            required: true
        },
        hobby: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>