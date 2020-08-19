// Person.prototype -- 原型 
// Person.prototype = {}  只有函数对象才具备的属性，函数一被定义就存在
Person.prototype.name = 'xxxx'
Person.prototype.say = function() {
  console.log('gi ao')
}
function Person() {
  // this.name = 'wn'
}

var person = new Person()
console.log(person.name) // xxx  从原型上继承而来的name


var person1 = new Person()
console.log(person1.name)


person.say() 