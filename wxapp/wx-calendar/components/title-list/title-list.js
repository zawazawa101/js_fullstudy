// components/title-list/title-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: Array,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIndex(event) {
      console.log(event)
      let currentIndex = event.currentTarget.dataset.index
      this.setData({
        currentIndex
      })

      this.triggerEvent('handle',{title: this.properties.title[currentIndex],currentIndex},{})
    }
  }
})
