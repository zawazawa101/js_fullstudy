function Person() {
  this.name = 'yyy'
  this.eat = function() {
    this.wxx.height++
  }
}
Person.prototype = {
  name: 'xxx',
  sayName: function() {
    console.log(this.name)
  },
  wxx: {
    height: 100
  }
}

var person = new Person()
person.name = 'bbb'
console.log(person)
// console.log(person.sayName()) // 'xxx'