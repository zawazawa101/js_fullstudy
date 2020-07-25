/**
 * @param {string} s
 * @return {string}
 * 557. 反转字符串中的单词 III
 * 解题思路 先把字符串以空格切割成几个字符串，再分别将这几个字符串倒叙输出拼接成新的字符串
 */
var reverseWords = function (s) {
  let str = ""
  let arr = s.split(" ")
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    for (let j = arr[i].length-1; j >= 0; j--) {
      str += arr[i][j]
      // console.log(arr[i].length)
      console.log(str)
    }
    if(i!=arr.length-1)
    str+=" "
  }
return str
};
// reverseWords(Let's take LeetCode contest)
console.log(reverseWords("Let's take LeetCode contest"))



    // if(arr[i].length % 2 ==0){
    //   for(let j = 0; j < arr[i].length / 2; j++){
    //     let temp = arr[i][j]
    //     arr[i][j] = arr[i][arr[i].length - 1 - j]
    //     arr[i][arr[i].length - 1 - j] = temp
    //   }
    // }else{
    //   for(let j = 0; j < (arr[i].length - 1) / 2; j++){
    //     let temp = arr[i][j]
    //     arr[i][j] = arr[i][arr[i].length - 1 - j]
    //     arr[i][arr[i].length - 1 - j] = temp
    //   }
    // }