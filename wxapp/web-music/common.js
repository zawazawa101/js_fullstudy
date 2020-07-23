  // ajax
    // wx.request 从本地小程序 -> 服务器
    //localhost:1314
    const bannerEle = document.querySelector('#banner')
    console.log(bannerEle)
    //fetch web 做接口请求数据的地方
    fetch('http://neteasecloudmusicapi.zhaoboy.com/banner')
    .then(data => data.json())
    .then(data => {
      // console.log(data)
      if(data.code == 200){// 状态码 请求成功
        const banners = data.banners
        const html =  banners.map((banner) => {
          console.log(banner)
          return `
            <img src = '${banner.imageUrl}' />
          `
        })
        console.log(html)
        bannerEle.innerHTML = html.join('')
      }
      //   // console.log(banners)
      // // bannerEle.innerHTML = banners.map()
      // for(let banner of banners){
      //   // console.log(banner)
      //   bannerEle.innerHTML += `<img src="${banner.imageUrl}" />`
      // }
      // }else{
      //   console.log('请求失败')
      // }
    })
  
