Function.prototype.mybind = function (context) {
  if (typeof this !== 'function') {
    // 调用call的不是一个函数
    throw new TypeError('Bind must be called on a function')
  }
  // console.log(this)
  // 拿到参数
  const args = Array.prototype.slice.call(arguments, 1)
  // 保存this
  const self = this
  // 定义一个空函数， 用来保存原函数的原型
  const original = function () {}
  // 绑定的函数
  const bound = function() {
  // this instanceof original, 判断是否用new 来调用bound
    // console.log(this);
    return self.apply(
      this instanceof original ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    )
  }
  if (this.prototype) {
    original.prototype = this.prototype
  }
  // 修改绑定函数的原型指向
  bound.prototype = new original()
  return bound
}
function a() {
  a.sayString()
  console.log(this.name);
}
var obj = {
  name: 'wn'
}

a.mybind(obj)()

