/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var arr = []
  if(s.length == 0){
      return true
  }
  for(var i = 0; i < s.length; i++){
      if(s[i] == '('){
        arr.push(s[i])
      }
      else if(s[i] == ')'){
          if(arr.length == 0){
             return false
          }
          if(arr[arr.length - 1] == '('){
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
          else{return false}
      }
      else if(s[i] == '{'){
          arr.push(s[i])
      }
      else if(s[i] == '}'){
           if(arr.length == 0){
              return false
           }
          if(arr[arr.length - 1] == '}'){
             arr.pop()
          }
          else{return false}
      }   
  }
  if(arr.length == 0){
      return true
  }

};
console.log(isValid('()') )