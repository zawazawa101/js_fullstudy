// set类似于数组，但是不一样的地方是set这种数据结构内部的成员是唯一值
// const s = new Set()// 类数组  本质是个Set对象(Set {})
// const arr = new Array()
// console.log(s)
// let arr = [2,3,4,1,3,2,5]

// for(let item of arr){// item 指代数组的每一项
//   console.log(item)
// }

// arr.forEach((x) => {//  只能用来遍历数组
//   s.add(x)// set数据结构独有的添加方法
// })
// console.log(s)

// const set = new Set([1, 2, 3, 4, 4])//可将数组作为参数给set赋值
// console.log(set.size)
// const set = new Set(document.querySelector('div')) // 可存放dom结构

// 数组去重
// let arr = [2,3,4,1,3,2,5]
// console.log([...new Set(arr)])

//字符串去重
// console.log([...new Set('abcdfddd')])

// const set = new Set()
// set.add(5)
// set.add('5')
// console.log(set)

// let arr = [2,3,4,1,3,2,5]
// console.log(arr.indexOf(6))//判断某个值是否存在于数组中
// console.log(arr.includes(4))

// const set = new Set()
// set.add(1).add(2).add(3)// set添加元素的方法
// set.delete(2)
// set.has(3)//判断是否含有某个元素
// set.clear()//清空所有元素成员

//  Array.from(['a', 'b', 'c']).forEach( e => {
//    console.log(e)
//  })

// const set = new Set([1, 2, 3, 4])
// const arr = Array.from(set)
// arr.forEach(e => {
//   console.log(e)
// });

// function dedupe(array) {
//   return Array.from(new Set(array))
// }
// console.log(dedupe([1, 2, 3, 3])) 


//set遍历
let set = new Set(['red', 'green', 'blue'])
// for(let item of set.keys()){//keys() 是set结构返回键名的遍历器
//   // console.log(item)
// }
// for(let item of set.values()){//values() 是set结构返回值名的遍历器
//   console.log(item)
// }
// 上两种返回结果一样

for(let item of set.entries()){
  console.log(item)
}