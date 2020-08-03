// 函数中的作用域 气泡模型
function foo(a) {
  var b = 2
  function bar(){

  }
  var c = 3
}
foo(1)
// console.log(a, b, c)
// console.log(bar())


// foo的作用域具备 a, b, c, ba这些标识符