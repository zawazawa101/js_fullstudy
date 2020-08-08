// function identify(context) {
//   return context.toUpperCase()
// }
// function speak(context) {
//   let greeting = 'Hello, I am' + identify(context)
//   console.log(greeting)
// }

// speak("wn")




// function identify() {
//   return this.name.toUpperCase()
// }
// function speak() {
//   let greeting = 'Hello, I am' + identify.call(this)
//   console.log(greeting)
//   console.log(this)
// }

// let me = {
//   name: "wn"
// }
// speak.call(me)

// this所处的词法作用域在哪里生效了，this作用域就指向哪里

// function foo () {
//   let person = {
//     name: 'wn',
//     age: 18
//   }
//   console.log(this) //  window
// }


// function bar() {
//   let person = {
//     name: '嗡嗡嗡',
//     age: 18
//   }
//   foo()
// }
// bar()
// function foo() {
//   console.log(this.a)
// }
// let a = 2;

// (function(){
//   "use strict" // 严格模式下的foo的调用，与位置无关
//   foo()
// })()


// function foo() {
//   console.log(this.a) //2
// }







//----------------------------------------------------------------

// function foo() {
//   console.log(this.a)
// }

// var obj = {
//   a: 2,
//   foo: foo
// }

// var bar = obj.foo

// var a = 'hello'

// bar()// hello
// //------------------------------------------------------------------------------------
// function foo() {
//   console.log(this.a)
// }
// function doFoo(fn) { // 参数传递其实又称为隐式赋值
//   fn()
// }
// var obj = {
//   a: 2,
//   foo: foo
// }

// // var bar = obj.foo

// var a = 'hello'

// doFoo(obj.foo) // hello
//------------------------------------------------------------------------------------
function foo() {
 console.log(this.a)
}

var obj = {
  a: 2,
  foo: foo
}
var bar = obj.foo

var a = 'hello'

