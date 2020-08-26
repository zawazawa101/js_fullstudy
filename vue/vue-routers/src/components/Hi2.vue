<template>
  <div>
    <p>我是Hi2页面</p>
    <button @click="goBack">返回上一个页面</button>
  </div>
</template>

<script>
export default {
  // data() {

  // },
  methods: {
    goBack() {
      this.$router.push({path: '/hi', query: {name: 'wn'}})
    }
  }
};
</script>

<style>
</style>