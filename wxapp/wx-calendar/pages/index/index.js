Page({
  data:{

  },
  onLoad: function(options) {
    console.log(options)
  },
  onUnload:function() {
    console.log('页面退出')
    const pages = getCurrentPages() 
    console.log(pages)
    pages[pages.length-2].setData({
      title: '呵呵呵'
    })
  }
  
  
  
})