<template>
  <div class="show-star" style="text-align:center">
      <span class="star" v-for="(item, index) in showStar" :key="index" :class="item"></span>
  </div>
</template>
<script>
export default {
  props:['score'],
  computed:{
    showStar() {
      const scoreInt = parseInt(this.score)
      const starArr = []
      for(let i = 0; i < scoreInt; i++){
        starArr.push('on')
      }
      if(scoreInt == this.score) {
        for(let i = 0; i < 5 - scoreInt; i++){
          starArr.push('off')
        }
      }else{
        if(this.score - scoreInt >= 0.5){
          starArr.push('half')
          for(let i = 0; i < 4 - scoreInt; i++){
            starArr.push('off')
          }
        }else{
            for(let i = 0; i < 5 - scoreInt; i++){
               starArr.push('off')
            }
        }
      }
      return starArr
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

.star
  display inline-block
  width 20px
  height 20px
  background-size 20px 20px
  background-repeat no-repeat
  margin-right 22px
  &:last-child
    margin-right 0
  &.on
    bg-image('star48_on')
  &.off
    bg-image('star48_off')
  &.half
    bg-image('star48_half')
</style>