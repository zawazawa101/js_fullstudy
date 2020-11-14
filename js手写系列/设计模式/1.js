// 单例模式

function foo() {
  let instance = null 
  return function(name, age) {
    this.name = name
    this.age = age 
    if(!instance) {
      instance = this
    } 
    return instance
  }
 }
 const Single = foo()
 let a = new Single('xxxx', 18)
 let b = new Single()
 a.name = 'haha'
 console.log(b === a);


