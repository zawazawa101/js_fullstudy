
// Object.prototype.name = 'xxx'
// // 原型上属性的增删改查

// // 改
// Object.prototype.name = 'jjj'

// // 删
// delete Object.prototype.name

// // 增 查
// // Object.prototype.name = 'ggg'
// function Car() {
//   this.name = 'ccc'
// }
// var Bus = {
//   name : 'bbb'
// }

// var car = new Car()
// Car.prototype =  Bus              // constructor 存在于实例化对象的原型对象上
// console.log(car.age)
// // console.log(Car.prototype)
// // constructor 是为了让Car()构造出的所有的对象都能找到它的自己的构造器


