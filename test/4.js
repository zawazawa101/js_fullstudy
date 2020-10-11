// var colors = ['red', 'blue', 'green']
// console.log(Object.prototype.toString(colors));
// console.log(colors.valueOf());

[0, 1, 3, 6, 8, 9, 10]  | 0 // 

// 第一次： begin = 0, end = 7  mid = 3  
//         判断： target == 0   arr[mid] == 6 
// 第二次： begin = 0   end = 2   mid = 1
//         判断： target == 0   arr[mid] == 1
// 第三次： begin = 0  end = 0  mid = 0
//         判断： target == 10   arr[mid] = 8 

var binarySearch = (arr, target) => {
  let begin = 0
  let end = arr.length 
  while(begin < end) {
    let mid = (begin + end) >>> 1 // 向下取整
    if(arr[mid] < target) {
      begin = mid + 1
    } else if (arr[mid] > target) {
      end = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(binarySearch([0, 1, 3, 6, 8, 9, 10], 0));