// components/testing/tesing.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
    type:String,
    value:"哈哈哈"
    },
    // color:{
    //   type: String,
    //   value: "red"
    // }
    
  },
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {
    style: "" 
  },
  // lifetimes:{
  //   attached(){
  //     let style = `color:${this.data.color};`

  //     this.setData({
  //       style
  //     })
  //   }
  // },
  /**
   * 组件的方法列表
   */
  methods: {
    handleIncream() {
      console.log('--------------------------')
    }
  }
})
