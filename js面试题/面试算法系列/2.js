// 2. 给数组规定要扁平的层数
const arr = [1, [2, 4, [3, 5, 10]]]
function flat(arr, plies) {
  if(plies == 0) {
    return arr
  }
  let flatArr  = []
  function walk(arr, num) {
    for (let item of arr) {
      if(Array.isArray(item) && num < plies) {
        walk(item, ++num)
      } else {
        flatArr.push(item)
      }
    }
  }
  walk(arr, 0)
  return flatArr
}
console.log(flat(arr, 2));