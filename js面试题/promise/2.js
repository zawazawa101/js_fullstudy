// 简单实现Promise

// 简单的回调
// function readFile(fn) {
//   setTimeout(() => {
//     fn('hello world')
//   }, 2000)
// }
// readFile((r) => {
//   console.log(r);
// })

function myPromise(fn) {
  let self = this
  this.status = 'PENDING'
  function onRes(value) {
    console.log(value);
    self.value = value
    self.status = 'FULFILLED'
    // self.onFulFilled && self.onFulFilled(value) 
  }
  function onRej() {}

  fn(onRes, onRej)
}
myPromise.prototype.then = function(fn) {
  if(this.status == 'FULFILLED') fn(this.value)
  // else if(this.status == 'PENDING') this.onFulFilled = fn
}
new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000)
  }, 1000)
  
}) .then(r => {
  console.log(r);
})
