// 数组去重
let array = [1, 1, 1, '1', '1']

function unique(array) {
  // //将数组中的每一项拿出来当主角
  // for (let i = 0; i < array.length - 1; i++){
  //   //array[i]
  //   for(let j = array.length - 1 ; j > i ; j--){
  //     // 当外面的for执行一次时，内层for会执行length - i次
  //     if(array[i] === array[j]){
  //       array.splice(j,1)
  //     }
  //   }
  // }
  // return array

  let array = [1, 2, 1, '1']
  let res = []
  for(let i = 0; i < array.length; i++){
    let current = array[i]
    if(res.indexOf(current) === -1){
      res.push(current)
    }
  }
  return res
}