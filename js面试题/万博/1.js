// for(var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }


  // function Animal() {
  //   // this.name  === dog.name
  //   this.name = "animal";
  //   this.say = function () {
  //     console.log(this.name);
  //   }
  // }
  // Animal.prototype.look = function () {
  //   console.log("Animal look");
  // };
  // function Dog() {
  //   // this 指向 dog
  //   Animal.call(this);     // 继承 父类的 属性
  //   this.name = "dog";
  // }
  // // 继承 父类的 方法
  // // Animal.prototype.__proto__ = Object.prototype
  // // Dog.prototype.__proto__ = Animal.prototype
  // Dog.prototype = Object.create(Animal.prototype);
  // var dog = new Dog();
  // //写出输出内容
  // dog.look();
  // //写出输出内容
  // dog.say();
  // // dog.__proto__  === Dog.prototype

  // let a = {}
  // // a.__proto__ === Object.prototype
  // let b = new Object()
  // // b.__proto__ === Object.prototype
  // let c = Object.create(null)
  // // c.__proto__ = undefined
  
  // class A {}
  // class B extends A {
  //   constructor() {
  //     super() 
  //   }
  // }


Object.prototype.a = 'Object';
Function.prototype.a = 'Function';
function Person(){};       
var child = new Person();
console.log(Person.a); 
console.log(child.a); 
console.log(child.__proto__.__proto__.constructor.constructor.constructor);

