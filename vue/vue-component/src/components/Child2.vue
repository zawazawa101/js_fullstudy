<template>
  <div class="child">
    child2
    {{msg}}
  </div>
</template>

<script>
import Bus from '@/utils/bus.js'
export default {
  data() {
    return {
      msg: ''
    }
  },
  created() {
    Bus.$on('info',(val) => {
      console.log(val)
      this.msg = val
    })
  }
}
</script>

<style>

</style>