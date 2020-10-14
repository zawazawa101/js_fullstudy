// 题目

// 填充 inherit 完成输出。
function inherit() {

}
let animalNum = 0;
function Animal(name) {
  animalNum ++;
  this.name = name;
}
Animal.prototype.getName = function() {
  return this.name;
};
const Cat = inherit(Animal, {  
    say:function() {
        console.log(`NO${animalNum}:${this.getName()}`);
    }
});
const cat1 = new Cat('小花');
cat1.say(); // NO1:小花

// 解答 
// function inherit(PConstructor, prototypeObj) {
//   function F(name) {
//     PConstructor.call(this, name)
//   }
//   F.prototype = prototypeObj
//   F.prototype.__proto__ = PConstructor.prototype
//   return F
// }