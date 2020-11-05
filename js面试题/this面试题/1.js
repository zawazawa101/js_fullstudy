// var a = function () {
//   this.b =3;
// }
// var c = new a();
// a.prototype.b = 9;
// var b = 7;
// a(); 

// console.log(b); // 3
// console.log(c.b); // 3




// function B() {
//   console.log(this.c);
//   this.c = 1
// }
// B.prototype.c = 2
// let bb = new B()


// function B() {
//   console.log(this);
// }
// let b = new B()

this.a = 20;
function go() {
   console.log(this.a);
   this.a = 30;
}
go.prototype.a = 40;
var test = {
   a: 50,
   init: function (fn) {
     fn(); // fn()里面的this指向window
     console.log(this.a);
     return fn;
   }
};
console.log((new go()).a);  // 40  30
test.init(go); // 20  50   只能改变 init 里面的this 指向test
var p = test.init(go); // 30 50
p(); // 30