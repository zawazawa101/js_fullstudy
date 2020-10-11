var str = 'abcde'
var obj = new String(str)

function newToString() {
  return 'hello world'
}

function func(val) {
  // val.toString = newToString
}

func(obj)
console.log(typeof obj);


console.log(String(obj));

// console.log(String('123'));