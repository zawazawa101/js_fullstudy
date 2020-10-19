// const yh = {
//   name: 'yh',
//   age: 18,
//   career: 'coder'
// }

// const hf = {
//   name: 'hf',
//   age: 19,
//   career: 'manager'
// }

// function User(name, age, career) {
//   this.name = name,
//   this.age = age,
//   this.career = career
// }

// const user = new User()


// 变， 不变
// function Coder(name, age) {
//   this.name = name,
//   this.age = age,
//   this.career = 'coder'
//   this.work = ['写代码', '写系统', '改bug']
// }

// function ProductManager(name, age) {
//   this.name = name,
//   this.age = age,
//   this.career = 'product manager',
//   this.work =  ['订会议室', '催更']
// }


function User(name, age, career, work) {
  this.name = name,
  this.age = age,
  this.career = career,
  this.work = work
}
function Factory(name, age, career) {
  let work
  switch(career) {
    case 'coder':
      work = ['写代码', '写系统', '改bug']
      break
    case 'product manager':
      work = ['订会议室', '催更']
      break
    case 'boss': 
      work = ['喝茶', '看报']
      break
  }
  return new User(name, age, work, career)
}
