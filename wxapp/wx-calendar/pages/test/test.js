// pages/test/test.js
import request from '../../service/service'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: 26.6666666,
    count: 0,
    title: '哈哈哈'
  },
  handleImageLoad() {
    console.log("图片加载完成")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 巨low的封装
  // request() {
  //   wx.request({
  //     url,
  //     data:{}, // 请求数据要传递的数据
  //     method: "get", // 默认为get方式请求数据
  //     success: res => {
  //       console.log(res)
  //     }
  //   })
  // },
  // 函数封装
  // request(options){
  //   wx.request({
  //     url: options.url,
  //     data: options.data || {},
  //     method: options.method || 'get',
  //     success: res => {
  //       console.log(res)
  //     }
  //   })
  
  // },


  onLoad: function (options) {
    // this.request()
    // this.request({
    //   url: 'http://neteasecloudmusicapi.zhaoboy.com/banner',
    // })
    request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/banner',
    }).then(res => {
      console.log(res)
    }).catch(res => {
      console.log(res)
    })
  },
  getInfo(event) {
    console.log(event)
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
    this.setData({
      count: ++this.data.count
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})