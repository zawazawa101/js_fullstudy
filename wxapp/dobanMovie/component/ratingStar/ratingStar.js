// component/ratingStar/ratingStar.js
const STAT_ON = "../../assets/imgs/rating_star_small_on.png"
const STAT_OFF = "../../assets/imgs/rating_star_small_off.png"
const STAT_HALF = "../../assets/imgs/rating_star_small_half.png"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score:{
      type:Number,
      observer: function(newVal, oldVal, path) {//监听器 对父组件传来的值进行操作
        let stars = [STAT_OFF, STAT_OFF, STAT_OFF, STAT_OFF, STAT_OFF]
        if(newVal > 0){
          newVal = newVal / 10
          let floor = Math.floor(newVal)
          if(floor != newVal){// 说明有小数
            stars[floor] = STAT_HALF
          }
          for(let i = 0; i < floor; i++){
            stars[i] = STAT_ON
          }
        }
        this.setData({
          stars
        })
      }
    },
    iconSize:{
      type:String,
      value: '26'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars: [STAT_OFF, STAT_OFF, STAT_OFF, STAT_OFF, STAT_OFF]
  },
  
  lifetimes:{
    attached:function(){
      // let score = this.data.score
      // let imageUrl = this.data.imageUrl
      // let intScore = parseInt(score)
      // for(let i = 0; i < intScore; i++){
      //   imageUrl.push('../../assets/imgs/评分五角星.png')
      // }
      // if(intScore === score){
      //   for(let j = 0; j < 5 - intScore; j++){
      //     imageUrl.push('../../assets/imgs/黯淡五角星.png')
      //   }
      // }else{
      //   imageUrl.push('../../assets/imgs/评分半颗五角星.png')
      //   for(let j = 0; j < 4 - intScore; j++){
      //     imageUrl.push('../../assets/imgs/黯淡五角星.png')
      //   }
      // }
      // this.setData({
      //   imageUrl
      // })



    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
