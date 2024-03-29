// miniprogram/pages/index/index.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    value: ''
  },
  showNewGroupModal() {
    this.setData({
      show: true
    })
  },
  closeDialog() {
    this.setData({
      show: false
    })
  },
  onChange(event) {
    this.setData({
      value: event.detail
    })
    
  },
  creatGroup() {
    const self = this
    if(this.data.value === ""){
      // 出现提示
      Toast({
        message: "未取名",
        duration: 1500,
        selector: '#toast-selected',
        zIndex: 19999

      })
      self.selectComponent("#new-group-modal").stopLoading()
      return
    }
    // 调用云函数 
    wx.cloud.callFunction({
      name: 'createroup',
      data: {
         groupName: self.data.value
      },
      success: res => {
        console.log(res)
        self.setData({
          value: '',
          show: false
        })
        Toast({
          message: "创建成功",
          type: "success",
          duration: 1500,
          selector: '#toast-selected',
          zIndex: 19999
  
        });
        setTimeout(()=>{
          wx.switchTab({
            url: "/pages/group/group",
          });
        },2000)
      },

      fail: error => {
        console.log(error)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})