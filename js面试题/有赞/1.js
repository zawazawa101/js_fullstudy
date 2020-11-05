const testURL = 'https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D&illegal=C%9E5%H__a100373__b4';
const url = 'https://www.baidu.com/s?wd=%E4%B8%9C%E5%8D%8E%E5%A4%A7%E5%AD%A6'
function getObj(url) {
  let stringObj = {}
  let pro = url.split('?')[1]
  let queryArr = pro.split('&')
  for(let query of queryArr) {
    let k = query.split('=')[0], v = query.split('=')[1]s
    try{
      v = decodeURIComponent(v)
    } catch {
      v = ''
    }
    if(k.slice(-2) === '[]') {
      k = k.slice(0, -2)
      stringObj[k] ? stringObj[k].push(v) : stringObj[k] = [v]
      continue
    }
    stringObj[k] = v
  }
  return stringObj
}

console.log(getObj(url));