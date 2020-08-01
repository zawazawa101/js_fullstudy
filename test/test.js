function count(){
  var txt1 = parseInt(document.getElementById('txt1').value)
  var txt2 = parseInt(document.getElementById('txt2').value)
  var select = document.getElementById('select').value
  var fruit = document.getElementById('fruit')
  var result = 0
  switch(select){
      case '+':
          result = txt1 + txt2
          break
      case '-':
          result = txt1 - txt2
          break
      case '*':
          result = txt1 * txt2
          break
      default :
          result = txt1 / txt2
  }
  console.log(result)
  
  fruit.value = result
}