<template>
  <div class="home">
    <p>首页</p> 

   <home-child />
  </div>
  
</template>

<script>
import HomeChild from "@/components/homeChild.vue"
export default {
  components: {
    HomeChild
  }
}
</script>

<style>

</style>