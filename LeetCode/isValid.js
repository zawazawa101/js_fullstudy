/**
 * @param {string} s
 * @return {boolean}
 */
// 有效的括号
// 解题思路：利用栈的特性 遍历字符串如果是左括号 左括号进栈  若是右括号则栈里的左括号出栈
var isValid = function(s) {
  var arr = [] //建立空数组模拟栈
  if(s.length == 0){
    return true //特殊情况，如果字符串为空，直接返回true
  }else if(s.length==1){
    return false
  }
  
  for(var i = 0; i < s.length; i++){// 
      if(s[i] == '('){// 如果是左括号符进栈
        arr.push(s[i])
      }
      else if(s[i] == ')'){//如果是右括号符就出栈
          if(arr.length == 0){ //先进行判断，如果栈里面没有可出栈的左括号，说明不是有效括号
             return false
          }
          if(arr[arr.length - 1] == '('){//若栈顶的括号是与该右括号对应的左括号，则左括号出栈
             arr.pop()
          }
          else{return false}
      }
      else if(s[i] == '['){
          arr.push(s[i])
      }
      else if(s[i] == ']'){
           if(arr.length == 0){
              return false
           }
          if(arr[arr.length - 1] == '['){
             arr.pop()
          }
          else
            {return false}
      }
      else if(s[i] == '{'){
          arr.push(s[i])
      }
      else if(s[i] == '}'){
           if(arr.length == 0){
              return false
           }
          if(arr[arr.length - 1] == '{'){
             arr.pop()
          }
          else{return false}
      }   
  }
  if(arr.length == 0){
      return true
  }else{
    return false
  }
  

};
console.log(isValid("(") )