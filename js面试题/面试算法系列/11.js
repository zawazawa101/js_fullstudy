// 415. 字符串相加
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
var addStrings = function(num1, num2) {
  let arr = [] 
  let carry = 0
  for(let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
    let n1 = num1.charAt(i) ? parseInt(num1[i]) : 0
    let n2 = num2.charAt(j) ? parseInt(num2[j])  : 0
    let sum = n1 + n2 + carry
    arr.unshift(sum % 10)
    sum >= 10 ? carry = 1 : carry = 0
  }
  if (carry) {
    arr.unshift(carry)
  }
  return arr.join('')
};
console.log(addStrings('1111222211','222222'));

