<template>
  <div class="methods">
    <p>{{count}}</p>
    <button @click="add">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods:{
    add(e) { // $event
      this.count++
      console.log(e)
    }
  }
}
</script>

<style>

</style>