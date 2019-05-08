<template>
  <div id="app">
  
    <!-- <router-link to='/login'>点击登录</router-link>
     <router-link to='/register'>点击注册</router-link> -->
  <router-view>

  </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
