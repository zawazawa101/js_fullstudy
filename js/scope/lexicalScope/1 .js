// function foo(a) {
//   var b = a + 2
//   function bar(c) {
//     console.log(a, b, c)
//   }
//   bar(b * 3)
// }
// // bar(5) // 在外部调用无效
// foo(2) // 2 4 12
// // 全局作用域下面只有一个 foo
// // foo作用域下有a, b, bar
// // bar作用域下有 c

(在浏览器中执行)
var a = 10 // window.a = 10
function foo(a) {
  var b = a + 2
  function bar(c) {
    console.log(window.a, b, c)
  }
  bar(b * 3)
}
foo(2)