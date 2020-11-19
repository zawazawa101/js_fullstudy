// 非原地快排

function quickSort(arr) {
  if (arr.length == 0 || arr.length == 1) return arr
  let maxArr = [], minArr = [];
  let prev = arr[0]
  for(let item of arr.slice(1)) {
    item > prev ? maxArr.push(item) : minArr.push(item)
  }
  let new_array = [...quickSort(minArr), prev, ...quickSort(maxArr)]
  return new_array
}

console.log(quickSort([1,5,0,9, -1,48,4]));