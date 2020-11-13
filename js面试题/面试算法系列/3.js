// 对象数组的去重 id相同即判断为重复

const responseList = [
  {id: 1, a: 1},
  {id: 1, a: 2}
]
function qc(arr) {
  let new_array = []
  let mapId = []
  for(let item of arr) { 
    if(!mapId.includes(item.id)) {
      new_array.push(item)
      mapId.push(item.id)
    } 
  }
  console.log(11);
  return new_array
}
console.log(qc(responseList));





