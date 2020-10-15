// 题目

// 填充 inherit 完成输出。
// function inherit() {

// }
// let animalNum = 0;
// function Animal(name) {
//   animalNum ++;
//   this.name = name;
// }
// Animal.prototype.getName = function() {
//   return this.name;
// };
// const Cat = inherit(Animal, {  
//     say:function() {
//         console.log(`NO${animalNum}:${this.getName()}`);
//     }
// });
// const cat1 = new Cat('小花');
// cat1.say(); // NO1:小花

// function inherit(PConstructor, prototypeObj) {
//   function F(name) {
//     PConstructor.call(this, name)
//   }
//   F.prototype = prototypeObj
//   F.prototype.__proto__ = PConstructor.prototype
//   return F
// }


2. 
// 实现一个 getPrime
// getPrime() //2
// getPrime() //3
// getPrime() //5


// function makePrime() {
//   let val = 1
//   function isPrime(v) {
//     let res = []
//     for (let i = 1; i <= v; i++) {
//       if(v % i === 0)  res.push(i)
//     }
//     return res.length === 2 
//   }
//   return function() {
//     val++
//     while(!isPrime(val)) {
//       val++
//     }
//     return val
//   }
// }
// let getPrime = makePrime()
// console.log(getPrime()); //2
// console.log(getPrime())//3
// console.log(getPrime())//5



var x = 10;
var y = 20;

function foo() { // foo 定义完 x y 跟他在哪里调用无关
  console.log(x, y);
}
foo(); // 10, 20 
function bar() {
  var y = 30;
  console.log(x, y); // 10, 30
  foo(); // 10, 20
} 
bar();