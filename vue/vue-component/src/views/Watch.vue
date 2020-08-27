<template>
  <div class="watch">
   <span style="margin-right: 20px">{{temp}}度</span>  
   <span>{{suggest}}</span><br>
   <button @click="add">add</button>
   <button @click="reduce">reduce</button>
  </div>
</template>

<script>
// mixins 把外部的代码扩展到里面来
let addLog = {
  updated: function() {
    console.log('数据发生了变化，此时温度为' + this.temp)
  }
}
let ext = {
  created() {
    console.log('我是被扩展出来的生命周期')
  },
  methods: {
    add() {
      console.log('我是被扩展出来的add')
    }
  }
}
export default {
  data() {
    return {
      temp: 25,
      suggest: '穿短袖'
    }
  },
  mixins: [addLog],
  extends: ext,
  methods: {
    add() {
      this.temp += 5
    },
    reduce() {
      this.temp -= 5
    }
  },
  watch:{
    temp: function(newVal){
      if(newVal < 15 && newVal > 0){
        this.suggest = '穿夹克'
      }else if(newVal < 0){
        this.suggest = '穿羽绒服'
      }else{
        this.suggest = '穿短袖'
      }
    }
  }
  
}
</script>

<style>

</style>