// 实现ES5中Function原型的bind方法， 使得以下程序最后能输出'success'
Function.prototype.mybind = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('Bind must be called on a function')
  }
  let args = Array.prototype.slice.call(arguments, 1) // [...arguments].slice(1)
  const fn = this
  // const origin = function() {}
  const bound = function() {
    return fn.apply(
      this instanceof bound ? this : fn,
      args.concat([...arguments])
    )
  }
  // if(this.prototype) {
  //   origin.prototype = this.prototype
  // }
  // bound.prototype = new origin()
  bound.prototype = fn.prototype
  return bound
}
 function Animal(name, color) {
  this.name = name;
  this.color = color;
 }
 Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
 };
 const Cat = Animal.mybind(null, 'cat');
 const cat = new Cat('white');
 const dog = new Animal('wangwang', 'red')
 console.log(cat);
 if (cat.say() === 'I\'m a white cat' && cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
 }
