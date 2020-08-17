function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa')
      resolve('yes')
    }, 2000)
  })
}
function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bbb')
      reject('no')
      
    }, 1500)
  })
}

function c() {
  setTimeout(() => {
    console.log('ccc')
  }, 500)
}
function d() {
  setTimeout(() => {
    console.log('ddd')
  }, 3000)
}

function e() {
  
    console.log('eee')

}
// finally 不管promise最后是个什么状态，都会执行finally
a().then(b).catch(c).finally(d)

// all 需要a b都执行完且结果都是resolve的情况下执行e
Promise.all([a(), b()]).then(e)


// race  a或b其中一个执行完就能执行e
Promise.race([a(), b()]).then(e)

