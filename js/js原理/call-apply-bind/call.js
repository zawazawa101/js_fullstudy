// fn.call(obj)

Function.prototype.myCall = function(context) {
  // this指向调用call的对象
  if (typeof this !== 'function') {

  }
  
  const fn = Symbol('fn')

  const args = [...arguments].slice(1)

  context = context || window

  // 将调用call函数的对象添加到context的属性中

  context[fn] = this
  // 执行该属性
  const result = context[fn](...args)

  delete context[fn]

  return result
}

