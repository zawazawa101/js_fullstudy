//index.js
//获取应用实例
const app = getApp()
const car = []

Page({
  data: {
    articleList:[],
    isHiddening: false,
    markers: [{
      iconPath: "../../resource/car (1).png",
      id: 0,
      latitude: 28.720513,
      longitude: 115.834895,
      width: 50,
      height: 50
    },
    {
      iconPath: "../../resource/car (1).png",
      id: 1,
      latitude: 28.719413,
      longitude: 115.835895,
      width: 50,
      height: 50
    },
    {
      iconPath: "../../resource/car (1).png",
      id: 2,
      latitude: 28.720713,
      longitude: 115.839895,
      width: 50,
      height: 50
    }
  ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    setTimeout(() => {
      this.setData({
        articleList: [{
          date: '6月26日',
          articles: [
            {
              id: 0,
              title: 'aaa',
              pic: '../../resource/3333.jpg' },      
            {
              id: 1,
              title: 'bbb',
              pic: '../../resource/3333.jpg' },            
            {
              id: 2,
              title: 'ccc',
              pic: '../../resource/3333.jpg' },           ]

        },
        {
          date: '6月27日',
          articles: [
            {
              id: 3,
              title: 'aaa',
              pic: '../../resource/3333.jpg' }, 
            {
              id: 4,
              title: 'bbb',
              pic: '../../resource/3333.jpg' },             {
              id: 5,
              title: 'ccc',
              pic: '../../resource/3333.jpg' },           ]

        }
      ],
        isHiddening: true
      })
    },2000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
