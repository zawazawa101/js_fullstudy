function A(name){
  this.name = name;
}
A.prototype.run =  function () { console.log(`${this.name} run`); }
function B(email) {
  // A所有的属性  // ??
  this.email = email
}
B.prototype  = new A()// ??
B.prototype.swim = function() {

}
// dddd
const b = new B('hh', 'yy');
console.log(b.email);