/**
 * @param{string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var hashNum = {//建立索引的哈希表
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000  
  }
  var num = 0
  for(var i = 0; i < s.length;i++){
      if(hashNum[s[i]] >= hashNum[s[i+1]]){  
        num += hashNum[s[i]]
      }
      else if(i+1 == s.length){
        num += hashNum[s[i]]   
      } 
      else{num -= hashNum[s[i]]}  
      }
  return num
} 
console.log(romanToInt("III"))

