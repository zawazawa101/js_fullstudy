const https =  require('https')
const cheerio = require('cheerio')
const fs = require('fs')

// 通过https模块的get方法请求网站链接，在回调函数中获取资源

https.get('https://movie.douban.com/top250', (res) => {
  // console.log(res)
  // 因为获取到的资源是分段返回的，所有需要手动拼接
  let html = ''
  // res.on 类似于addEventListener
  res.on('data', (chunk) => {
    html += chunk
  })
  // res 数据加载完成 我们去执行相应事件
  res.on('end', () => {
    // 操作dom
    let allFilms = [] // 存放爬取到的数据
    const $ = cheerio.load(html)
    $('li .item').each(function() {
      const title = $('.title', this).text()
      const star = $('.rating_num', this).text()
      const pic = $('.pic img', this).attr('src')
      allFilms.push({
        title,
        star,
        pic
      })
    })
    // console.log(allFilms)
    fs.writeFile('allFilms.text', JSON.stringify(allFilms), (err) => {
      if(err) throw err
      console.log('文件已保存')
    })
  })
})