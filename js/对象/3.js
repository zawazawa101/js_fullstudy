// 包装类
// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num*2)
// // num 参与运算又变回了数字，不参与运算还能当作对象来使用，能有属性和方法，同理字符串和布尔值也一样，但是null和undefined不行

// var str = 'abcd'
// console.log(str.length)

//  //包装类
// var num1 = 4 // 隐式过程   new Number(4)
// num1.len = 3 //            new Number(4).len = 3
//              //            delete len


// console.log(num1.len)     // new Number(4).len


//考点
var arr = [1, 2, 3, 4, 5, 6]
arr.length = 2
console.log(arr) // [1, 2]
var str = 'abcd'
str.length = 2
console.log(str) // 'abcd'  
console.log(str.length) // 字符串对象天生具有length属性


var str = 'abc'
str += 1
var test = typeof (str)
if (test.length == 6) {
  test.sign = 'typeOf的返回结果可能为String'
}
console.log(test.sign)