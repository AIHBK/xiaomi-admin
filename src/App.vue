<template>
  <div id="app">
    <router-view :userName='userName'></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      userName: {
        getName: ''
      }
    }
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
</style>
