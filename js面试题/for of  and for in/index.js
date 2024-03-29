// 区别
// for in 
// 循环返回的都是数据结构的键值名  
// 遍历数组返回的是数组的下标
// 不仅可以遍历数字键名， 还会遍历原型上的值和手动添加的其他键
// 在特殊情况下，遍历的顺序是随机的


// for of 
// 不能遍历对象
// 返回的是数组的元素
// Symbol.iterator  Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用
// let obj = {
//   a: 1,
//   b: 2,
//   [Symbol.iterator]: () => {
//     // es6 generate
//     let keys = Object.keys(obj)
//     return {
//       next() {
//         if(keys.length === 0) {
//           return {
//             done: true,
//             value: undefined
//           }
//         }
//         let k = keys.shift()
//         return {
//           done: false,
//           value: obj[k]
//         }     
//       }
//     }
//   }
// }
// for(let item of obj) {
//   console.log(item);
// }
// 数组
// Map
// Set
// String
// arguments
// NodeList
// 实现对a这个实例对象用for-of遍历
 class A { 
   items =  ['1', '2', '3'] 
 } 
const a = new A() 
console.log(a.items);


class A {
  items = ['1', '2', '3']
  [Symbol.iterator] = function(){
    let i = 0
    let that = this
    return {
      next() {
        if(i === 3) {
          return {
            done: true
          }
        }
        let res = {
          done: false,
          value: that.items[i]
        }
        i++
        return res
      }
    }
  }
}





// for in 的输出顺序

// 对象的常规属性和排序属性

// function Foo () {
//   this[100] = 'test-100'
//   this[1] = 'test-1'
//   this['b'] = 'bar-B'
//   this[50] = 'test-50'
//   this[9] = 'test-9'
//   this[8] = 'test-8'
//   this[3] = 'test-3'
//   this[5] = 'test-5'
//   this['A'] = 'bar-A'
//   this['C'] = 'bar-C'
// }

// let bar = new Foo()

// for( let key in bar) {
//   console.log(`index:${key}  value:${bar[key]}`)
// }

// 对象中的数值属性会被优先遍历， 且按照升序遍历

// ECMAScript 规范中定义了 数字属性应该按照索引值的大小升序排列，字符串属性根据创造时的顺序升序排列 