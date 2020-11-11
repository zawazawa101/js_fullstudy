let arr = [[1, 2, 2], [3, 4, 5, 5],[6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
// let new_array = []
// function flatten(arr) {
//   for(let item of arr) {
//     if(Array.isArray(item)) {
//       flatten(item)
//     } else new_array.push(item) 
//   }
// }
// flatten(arr)
// console.log(new_array);

function flatten(arr) {
  return arr.reduce((total, current) => {
     return total.concat(Array.isArray(current) ? flatten(current) : current)
  }, [])
}
console.log(flatten(arr));

// function duplicate(new_array) {
//   let array = []
//   for(let item of new_array) {
//     if(!array.includes(item)) {
//       array.push(item)
//     }
//   }
//   return array
// }
// let array2 = duplicate(new_array)
// console.log(array2);

