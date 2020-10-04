// 46. 全排列
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//   const res = []
//   const backrack = (path) => {
//     if(path.length === nums.length) {
//       res.push(path)
//       return
//     }
//     nums.forEach(n => {
//       if(path.includes(n)) {
//         return
//       }
//       backrack(path.concat(n))
//     })
//   }
//   backrack([])

//   return res
// };



// 22. 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

// 示例：

// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]
var generateParenthesis = function (total) {
  let list = []
  function generate(left, right, n, s) {
    //  终止条件：如果左右括弧都用完则结束
    if (left === n && right === n) {
      list.push(s)
      return
    }

    // 如果左括弧未用完则继续增加左括弧
    if (left < n) {
      console.log('1');
      generate(left + 1, right, n, s + "(")
      
    }

    // 如果右括弧少于左括弧则继续增加右括弧
    if (left > right) {
      console.log('2');
      generate(left, right + 1, n, s + ")")
    }
  }
  generate(0, 0, total, "")
  return list
}
generateParenthesis(3)
dfdfdf