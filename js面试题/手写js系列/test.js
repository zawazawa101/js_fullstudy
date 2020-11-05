let a = {name: 'a'}, b = {name: 'b'};
function foo() {
  console.log(this.name);
}
foo.bind(a).bind(b)()