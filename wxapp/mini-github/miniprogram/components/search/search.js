// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  classes: ['cancel-class'],
  properties: {
    placeholder:{
      type: String,
      value: ''
    },
    customClass: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: 'shousuo'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // console.log(event)
      this.triggerEvent('search',event.detail)
    }
  }
})
