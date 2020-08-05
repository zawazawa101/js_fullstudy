// js promise 处理异步请求的对象

// pending 准备阶段
// resolve 成功阶段
// reject 失败阶段

  new Promise((resolve, reject) => {
    //  resolve('成功状态')
    reject('拒绝状态')
  }).then(
    value => {
      console.log(value)
    },
    reason => {
      console.log(reason)
    }
  )
 console.log('666')