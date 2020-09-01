<template>
  <div id="app">
    <h2>{{$store.state.count}}</h2>
    <button @click="$store.state.count++">+</button>
    <hello-vue/>
  </div>

</template>

<script>
import HelloVue from './components/HelloVue.vue'
export default {
  name: 'App',
  components: {
    HelloVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
