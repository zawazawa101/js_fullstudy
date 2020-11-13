// 柯里化

function curry(fn) {
  let arr = []
  return (...args) => {
    arr.push(args)
  }
}

let sum = (a, b ,c) => a + b + c

let fun = curry(sum)
fun(1)(2)(3)
