// 原地快排
function QuickSort(arr) {
  let left = 0, right = arr.length - 1;
  let pre = arr[left]
  while(left < right) {
    while(arr[right] > pre) { // 右指针
      right--
    }
    arr[left] = arr[right]
    while(arr[left] < pre) {
      left++
    }
    arr[right] = arr[left]
    // [arr[left], arr[right]] = [arr[right], arr[left]]
  }

}
