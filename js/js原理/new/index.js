function Person(name) {
  this.name = name
}
let p = new Person('Tom')

// 1. p.__proto__ = ?
// 2. Person.__proto__ = ?
// 3. 为什么p打印出来是个对象

var foo = {}
var F = function() {}

Object.prototype.a = 'value a'
Function.prototype.b = 'value b'

// console.log(foo.a)  ?
// console.log(foo.b) ?
// console.log(F.a) ？
// console.log(F.b) ？


// new 的实现原理

function Person(name, age) {
  this.name = name
  this.age = age
}
function myNew(fun) {
  return function() {
    let obj = {
      __proto__: fun.prototype
    }
    fun.call(obj, ...arguments)
    return obj
  }
}
let obj = myNew(Person)('fu', 20)