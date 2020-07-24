
//求字符串数组的公共前缀
var longestCommonPrefix = function(strs) {
  if (strs.length <= 0) { //如果字符数组长度为0，不用做比较，直接返回空字符串
      return "";
  }
  if (strs.length == 1) { //如果字符数组长度为1，即只有一个人字符串，直接返回该字符串（不用作比较，该字符串本身即为公共前缀）
      return strs[0];
  }
  var str = ""; //用来装载公共前缀
  for (var i = 0; i < strs[0].length; i++) {
      var temp = strs[0][i]; //先将第一个字符串的第一个字母赋值给temp
      for (var j = 1; j < strs.length; j++) {
          if (temp != strs[j][i]) {
              return str;
          }
          if (j == strs.length - 1) {
              str += temp;
          }
      }
  }
  return str;
};
var s = ["flower", "flow", "floght"];
longestCommonPrefix(s);
var str = longestCommonPrefix(s);
console.log(str)