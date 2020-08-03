// 欺骗词法作用域

// //eval()
// function foo(str,a) {
//   eval(str) // 影响了正常的词法作用域
//   console.log(b, a)
// }
// var b = 2 
// foo("var b = 3", 1)



// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// obj["a"] = 2
// with(obj) {
//   a = 100
//   b = 200
//   c = 300
// }
// console.log(obj)

// with的缺点
function foo2(obj) {
  with(obj) {
   a = 2
  }  // obj.a = 2
}
// var o1 = {
//   a: 3
// }
// foo2(o1)
// console.log(o1)
var o2 = {
  b: 3
}
foo2(o2)
console.log(o2.a)