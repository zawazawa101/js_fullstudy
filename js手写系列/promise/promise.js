// 实现一个简单的sleep函数
// function sleep(fn, delay) {
//   setTimeout(() => {
//     fn('Hello World')
//   },delay)
// }

// sleep((r) => {
//   console.log(r);
// }, 1000)


function MyPromise(cb) { // cb是回调函数 
  let self = this  // 保存this值，在cb的回调函数的使用
  this.status = 'PENDING' // 状态值，一开始为PENDING状态
  function onRes(value) {  // 如果执行了onRes函数, 即执行了原生Promise中的resolve
    self.value = value     //  给promise添加value属性用来传递then
    self.status = "FULFILLED"  // 此时状态为FULFILLED
    self.onFulfilled && self.onFulfilled(value)  // Promise对象上的onFulfilled方法是执行了then方法后添加的
  }
  function onRej(err) {}
  cb(onRes, onRej)
}
MyPromise.prototype.then = function(fn) {
  if (this.status === "FULFILLED") fn(this.value) // 判断状态 如果status为成功状态
  else if (this.status === "PENDING") this.onFulfilled = fn  // 如果不是的话，给实例对象上添加方法，当上面的res执行完成后
}                                                             // 该方法跟着执行

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('res')
  }, 500)
}).then( r => {
  console.log(r);
})








