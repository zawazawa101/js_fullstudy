// let obj = {
//   name: '明国',
//   age: 18,
//   sex: 'man'
// }
// obj.height = '175cm'
// // console.log(typeof Obj.name)

// const m = new Map()
// // console.log(m)// Map {}
// m.set(obj, 'content')//添加 存值
// console.log(m)//Map { { name: '明国', age: 18, sex: 'man' } => 'content' }
// map.get(obj)//取值
// console.log(m.has(obj))//查询
// map.delete(obj)//删除



// const map = new Map([
//   ['name','xiangxiang'],
//   ['age','20']
// ])
// console.log(map.size)// Map { 'name' => 'xiangxiang', 'age' => '20' }


// const map = new Map()
// const arr = [ ['name','xiangxiang'],
// ['age','20']]
// arr.forEach(([key,value]) => {
//  map.set(key,value)
// })

// const set = new Set([['foo',1],['bar',2]])
// const m1 = new Map(set)
// console.log(m1)// Map { 'foo' => 1, 'bar' => 2 }

// const map = new Map()
// const k1 = ['a']
// const k2 = ['a']

// console.log(map.set(k1,111).set(k2,111))//Map { [ 'a' ] => 111, [ 'a' ] => 111 }
// //k1 k2 key值相同 但是在Map中也被认为是两个键


// console.log(map.set(-0,123))// 0和-0 默认就是一个键
// console.log(map.set(+0,123))

// map.set(true,1)
// map.set("true",2)//可区分字符串和布尔值

// map.set(undefined,1)
// map.set(null,2)// 均可
// //NaN被默认为是一个键



//遍历

const map = new Map([
  ['foo','no'],
  ['bar','yes']
])
// keys() 返回键名的遍历器
// for(let key of map.keys()){
//   console.log(key)
// }
// // values() 返回键值的遍历器
// for(let key of map.values()){
//   console.log(values)
// }
// // entries() 返回的成员遍历器
// for(let key of map.entries()){
//   console.log(entries)
// }

//将map转化为数组
let m2 = [...map]
let m1 = [...map.entries()]
console.log(m2)