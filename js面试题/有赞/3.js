function add(a, b, c, d, e) {
  return a + b + c + d + e
}

function curry(fn) {
  let len = fn.length, args = [];
  function T(...arg) {
    args = args.concat(arg)
    if(args.length >= len) {
      return fn(...args)
    } else {
      return T
    }
  } 
  return T
}

const sum = curry(add)