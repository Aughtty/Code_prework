<template>
  <div id="app">
    <UserInfo 
      :username="username"
      :age="age"
      :isSingle="isSingle"
      :car="car"
      :hobby="hobby"
    ></UserInfo>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue'
export default {
  data() {
    return {
      username: 'John Doe',
      age: 25,
      isSingle: true,
      car: 'BMW',
      hobby: ['reading', 'swimming', 'coding']
    }
  },
  components: {
    UserInfo
  }
}
</script>

<style>

</style>