// new Person() 返回相同的对象
let instance = null
function Person() {
  if(!instance) {
    instance = this
  }
  return instance
}
