// 165. 比较版本号
// 比较两个版本号 version1 和 version2。
// 如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。

// 你可以假设版本字符串非空，并且只包含数字和 . 字符。

//  . 字符不代表小数点，而是用于分隔数字序列。

// 例如，2.5 不是“两个半”，也不是“差一半到三”，而是第二版中的第五个小版本。

// 你可以假设版本号的每一级的默认修订版号为 0。例如，版本号 3.4 的第一级（大版本）和第二级（小版本）修订号分别为 3 和 4。其第三级和第四级修订号均为 0。
 /**
//  * @param {string} version1
//  * @param {string} version2
//  * @return {number}
//  */
var compareVersion = function(version1, version2) {
  let v1Arr = version1.split('.'),
  v2Arr = version2.split('.')
  let len = Math.min(v1Arr.length, v2Arr.length)
  for(let i = 0; i < len; i++) {
    let v1Num = Number(v1Arr[i]),
    v2Num = Number(v2Arr[i])
    if(v1Num > v2Num) {
      return 1
    } else if(v1Num < v2Num) {
      return -1
    }
  }
  if(v1Arr.length == v2Arr.length){
    return 0
  }
  if (v1Arr.length > v2Arr.length) {
    for (let i = v1Arr.length - 1; i >= v2Arr.length; i--) {
      if (v1Arr[i] != 0) {
        return 1
      }
    }
  } else {
    for (let i = v2Arr.length - 1; i >= v1Arr.length; i--) {
      if (v2Arr[i] != 0) {
        return -1
      }
    }
  }
  return 0
  
};
console.log(compareVersion("1.0.1.0","1"));
