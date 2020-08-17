// js 是单线程的
// promise pending(进行中) resolved(成功) reject(失败)

let xq = new Promise((resolve, reject) => {
   setTimeout(() => {
    console.log('元隆相亲了！')
    resolve('成了')
  },2000)
}).then(res => {
  return marry()
}).then(res=> {
  baby1()
})

// function xq() {
//   setTimeout(() => {
//     console.log('元隆相亲了！')
//   },2000)
//   marry()
// }
function marry() {
  return  new Promise((resolve, reject) => {
    setTimeout(() =>{
      console.log('元隆结婚了！')
      resolve('元隆结婚顺利')
    }, 1000)
  })
}
  // baby1()
function baby1() {
  setTimeout(() => {
    console.log('小元隆1出生')
  }, 500)
}

// xq()


