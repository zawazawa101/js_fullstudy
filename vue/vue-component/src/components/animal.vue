<template>
  <div class="animal">
    <p>我的宠物：{{animalName}}</p>

  </div>
</template>

<script>
export default {
  props:{
    animalName:{
      type: String,
      default: '小白'
    }
  },
  data() {
    return {
     
    }
  }
}
</script>

<style>

</style>