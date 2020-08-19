function Car(color, owner) {
  this.color = color
  this.owner = owner
//   this.carName = 'BMW'
//   this.lang = 4900         重复的属性可以定义到原型上
//   this.height = 1400
//
 }
Car.prototype.carName = 'BWM'
Car.prototype.lang  = 4900
Car.prototype.height = 1400