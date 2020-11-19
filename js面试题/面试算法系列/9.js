// 字符串数组求最长前缀
function longestCommonPrefix(arr) {
  let str = arr.shift(), longComStr = '';
  for (let i = 0; i < str.length; i++) {
    for(let item of arr) {
      if(item[i] !== str[i]) {
        return longComStr
      }
    }
    longComStr += str[i]
  }
  return longComStr
}

console.log(longestCommonPrefix(['b', 'a']));
