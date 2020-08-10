// function foo() {
//   console.log(this.a)
// }
// var obj = {
//   a: 2
// }
// foo.call(obj)
// foo.apply(obj)

// var a = {
//   user: "wn",
//   fn: function() {
//     console.log(this.user)
//   }
// }
// var b = a.fn
// b.call()
// b.apply()

var a = {
  user: "wn",
  fn: function() {
    console.log(this.user)
  }
}
var b = a.fn
var c = b.bind(a)
c()