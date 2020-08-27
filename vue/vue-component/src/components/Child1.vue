<template>
  <div class="child">
    child1
    <button @click="sendMsg">传值给老二</button>
  </div>
</template>

<script> 
import Bus from "@/utils/bus.js"
export default {
 
  data() {
    return {
      msg: '我是child1里面的数据'
    }
  },
  methods: {
    sendMsg() {
      Bus.$emit('info', this.msg)
    }
  }
}
</script>

<style>

</style>