// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: 26.6666666,
    count: 0
  },
  handleImageLoad() {
    console.log("图片加载完成")
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
    console.log(this.data.price)
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
  handleinccc() {
    console.log('gggg')
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})