// let a = 1
// let b = 2
// let c = 3

// 数组的解构
// let [a, b ,c] = [1, 2, 3]

// let [foo, [[bar], baz]] = [1, [[2], 3]]



// let [, , third] = ['a', 'b', 'c']
// let [x, y] = [1, 2, 3]

// let [head, ...tail] = [1, 2, 3, 4]
// console.log(tail)

// let [a, b, ...c] = ['hello']

// let [foo] = 1 //只能用数组进行赋值
// let [foo] = {}

// let [foo = true] = [] 
// let [x, y = 'aaa'] = ['a', undefined] // undefined 解构出来时默认赋值是不成功的
// let [x, y = 'aaa'] = ['a', null]

// let [x = 1, y = x] = []
// let [x = 1, y = x] = [2]
// let [x = 1, y = x] = [2, 3]

// 对象的解构

// let {foo, bar} = {foo: 'aaa', bar: 'bbb'}

// let obj = {
//   name: 'aaa',
//   age: 18
// }
// let {name, age} = obj
// console.log(name, age) 'aaa' 18

// let {foo: baz} = { foo: 'aaa', bar: 'bbb'}
// foo是匹配模式 baz才是变量
// console.log(baz) //'aaa'

// let obj = {
//   name: 'aaa',
//   desc: {
//     alone: false,
//     age: 20,
//     measurements: [50, 100, 120]
//   }
// }
// let{name,desc: {alone,age,},desc:{measurements: [x,y,z]} }= obj
//  console.log(name, alone, age, x, y, z)


// let {x = 3} = {x: 6}

// 注意！
// let x
// ({x} = {x: 1})
// console.log(typeof x)

//  字符串的解构
// let [a, b, c, d, e, f] = 'hello'
// console.log(a, b, c, d, e, f)

// let {length: len} = 'hello'
// console.log(len)


// //数值和布尔值的解构赋值
// let {toString: s} = 123

