// 构造函数
function Student(name, age, sex) {
  // // var this = { 首先在函数内部创建一个this对象
  //       name: ''   
  //       age: ''
  // // } 

  this.name = name
  this.age = age
  this.sex = sex
  this.grade = 2017 
  // return this
}

var student = new Student('zzz', 22, 'boy')
console.log(student)

// 手写一个构造函数