/**
 * @param {number} n
 * @return {string}
 * 1374. 生成每种字符都是奇数个的字符串
 */
var generateTheString = function(n) {
  let str = ''
  for(let i = 0; i < n - 1; i++){
    str += 'a'
  }
  n % 2 == 0?str += 'b' : str += 'a'
};