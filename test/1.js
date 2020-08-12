// console.log(Boolean()) // false
// console.log(Boolean(false)) // false
// console.log(Boolean(undefined)) //false
// console.log(Boolean(null))  //false
// console.log(Boolean(NaN)) //false
// console.log(Boolean(+0)) //false
// console.log(Boolean(-0)) //false
// console.log(Boolean(-1)) //true
// console.log(Boolean('false'))  //true
// console.log(Boolean(''))  //false
// console.log(Boolean(Object))  //true

// 原始值转数字
// new Number()
// console.log(Number()) // 0
// console.log(Number(undefined)) // NaN
// console.log(Number(null)) // 0
// console.log(Number(false))  // 0
// console.log(Number('')) // 0
// console.log(Number(true)) // 1
// console.log(Number('123 123')) //NaN 
// console.log(Number('00123'))  // 123
// console.log(Number('-123')) // -123
// console.log(Number('wn'))  // NaN
// console.log(Number('100a')) // NaN
// console.log(parseInt('100a')) // 100
// console.log(parseInt('1.23 123')) //1
// console.log(parseFloat('1.23a')) //1.23
// // parseInt  只取整数或只取小数的整数部分
// // parseFloat 可以取到小数 并且字符串的数值部分要在字符串的最前面
// console.log(parseInt('a123'))  // NaN


// 原始值转字符串
// console.log(String())  // " "
// console.log(String(undefined)) // "undefined"
// console.log(String(null)) // "null"
// console.log(String(false)) // "false" 
// console.log(String(0)) // "0"
// console.log(String(-0)) // "0"
// console.log(String(NaN)) // "NaN"
// console.log(String(-5)) // "-5"

//字符串的转化简单基本能将所有输入的特殊值都转化为字符串，除了+0和-0 转化的结果都是字符串'0'

// 原始值转对象
// 直接调用原始值的构造函数, new String(),new Number(),new Boolean() 
  // var a = 5
  // var b = new Number(a)
  // // console.log(b instanceof Object)
  // console.log(Object.prototype.toString.call(b))




// 对象转布尔值



//对象转为字符串和数字
// toString() valueOf()

// 一元操作符

// console.log(1 + '1') 

// console.log( + '1')
// // + ToNumber    === Number('1')

// console.log( +[]) 

// console.log( + ['1'])
// ToPrimitive(input,[preferredType]) 这是一个我们不可调用的系统api 用于系统用隐式转换
//input 表示要处理的值
// preferredType 非必填， 表示希望转换成的类型 Number 和 String
//如果preferredType没传  如果传入的input 的类型是日期类型时。preferredType的值相当于是String，其他情况都相当于Number

// ToPrimitive(obj, Number)
// 1. 如果obj是基本类型 直接返回
// 2. 否则， 调用valueOf ，如果返回一个原始值。则js将其返回
// 3. 否则， 调用toString 如果返回一个原始值，则js将其返回
// 4. 否则，js 抛出一个类型错误异常

// ToPrimitive(obj, toString)
// 1. 如果obj是基本类型 直接返回
// 2. 否则， 调用toString ，如果返回一个原始值。则js将其返回
// // 3. 否则， 调用valueOf 如果返回一个原始值，则js将其返回
// // 4. 否则，js 抛出一个类型错误异常
// console.log(+ ['1', '2', '3'])
// console.log(+ {})

// // 二元操作符 +
// // val1 + val2 => ToPrimitive(val1) + ToPrimitive(val2)
// console.log(null + 1)
// // console.log({} + [])
// console.log([] + [])

var a = 1
console.log(typeof a.valueOf())
