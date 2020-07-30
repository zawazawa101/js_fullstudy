// // 正则的定义
// let patt1 = new RegExp('hello')
// let patt2 = /world/
// // 正则的使用 test()

// let pat = /my/
// let str = 'this is my code...' 
// console.log(pat.test(str))// 如果str含有pat字段 则返回true

// let pat = /hello/
// let msg = 'oh hello world'
// console.log(pat.exec(msg))

// 正则表达式的类型
// // /pattern/attributes   g: 全局匹配    i:区分大小写匹配
// let str = 'Visit NanChang oh hello world'
// let pat = /nanChang/i
// let pat2 = /NanChang/gi
// console.log(pat2.test(str))


// 字符串的正则
// let str = 'Visit W3School'
// console.log(str.search(/w3school/i)) // 字符串查找 找不到返回-1 找到则返回下标i

// let str = '1 plus 2 equl 33'
// console.log(str.match(/\d+/g))// 字符串匹配

// let str = 'Hello pp! oh I am wn'
// console.log(str.replace(/wn/,'snail'))
// console.log(str)

// console.log(str.split('')) 
// console.log(str.split(/\s+/)) 

// 正则写法
// [abc]查找方括号之间的任何字符
// let str = 'Is this all there is?'
// let pat = /[a-h]/g
// console.log(str.match(pat))//[ 'h', 'a', 'h', 'e', 'e' ]

// //[^abc]查找任何不再方括号之间的字符
// let str = 'hello pp like jinlong'
// let pat = /[^like]/g
// console.log(str.match(pat))

// let str = 'hello zzzz! How are you?'
// let pat = /hello|you/g
// console.log(str.match(pat))

// let str = "That's hot! 100%"
// // let pat = /h.t/g
// // console.log(str.match(pat))//[ 'hat', 'hot' ]
// let pat = /\w/g

// console.log(str.match(pat))


// let str = 'moon'
// let pat = /\bm/g
// // console.log(str.match(pat))

// let str = 'hello xxxx! hello world!'
// //  let pat = /h+/g
// //  console.log(str.match(pat))
// let pat =/lo*/g
// console.log(str.match(pat))

// 手机号正则
let tel = '13826864511'

let pat = /^1([3-9])\d{9}$/

let pat = 

console.log(pat.test(tel))