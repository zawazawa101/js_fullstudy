// 数组的扁平化
// 1. 最初始版本的递归调用
const arr = [1, [2, 4, [3, 5, 10]]]
const flatArr = []
function flat(arr) {
  for(let item of arr) {
    if(Array.isArray(item)) {
      flat(item)
    } else {
      flatArr.push(item)
    }
  }
}
flat(arr)
console.log(flatArr);

// 2. 给数组规定要扁平的层数