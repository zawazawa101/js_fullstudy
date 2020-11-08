function Animal(params) {
  this.hasTail = true
  console.log(params);
  return params
}
console.log(new Animal);// 无参数列表调用
console.log(new Animal());
console.log(new Animal({}));

