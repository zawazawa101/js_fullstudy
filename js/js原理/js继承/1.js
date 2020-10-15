// function newFunc(fn) {
//   let obj = {}
//   obj.__proto__ = fn.prototype
//   fn.call(obj, arguments)
//   return obj
// } 
// function Fn(name, age) {
//   this.name = name
//   this.age = age
// }
function F() {}
let p1 = new F()
F.prototype = {
  name: '小花'
}
console.log(p1.constructor);