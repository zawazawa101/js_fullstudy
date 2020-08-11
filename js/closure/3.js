//  实现一个函数执行出来的结果都是累加的

//  var count = 0
// function test() {
//   count++
//   console.log(count)
// }
// test()
// test()
// test()
// test()
// 很low的做法


function test() {
  var count = 0
  function addNum() {
    console.log(++count)
  }
  return addNum
}

let add = test()

add()
add()