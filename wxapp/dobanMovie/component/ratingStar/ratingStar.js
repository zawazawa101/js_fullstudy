// component/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score:{
      type:Number,
      score: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageUrl: []
  },
  
  lifetimes:{
    attached:function(){
      let score = this.data.score
      let imageUrl = this.data.imageUrl
      let intScore = parseInt(score)
      for(let i = 0; i < intScore; i++){
        imageUrl.push('../../assets/imgs/评分五角星.png')
      }
      if(intScore === score){
        for(let j = 0; j < 5 - intScore; j++){
          imageUrl.push('../../assets/imgs/黯淡五角星.png')
        }
      }else{
        imageUrl.push('../../assets/imgs/评分半颗五角星.png')
        for(let j = 0; j < 4 - intScore; j++){
          imageUrl.push('../../assets/imgs/黯淡五角星.png')
        }
      }
      this.setData({
        imageUrl
      })

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
