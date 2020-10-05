// function find(str) {
//   let state = start
//   for (let c of str) {
//     state = state(c)
//   }
//   return state === end
// }

// function start(c) {
//   if(c === 'a') return founda(c)
//   return start
// }

// function end(c) {
//   return end
// }

// function founda(c) {
//   if (c === 'a') return foundb
//   return start(c)
// }
// function foundb(c) {
//   if (c === 'b') return foundc
//   return start(c)
// }
// function foundc(c) {
//   if (c === 'c') return end
//   return start(c)
// }

const p1 = new Promise((resolve, reject) => {
  console.log('create a promise');
  resolve('成功了');
})

console.log("after new promise");

const p2 = p1.then(data => {
  console.log(data)
  throw new Error('失败了')
})

const p3 = p2.then(data => {
  console.log('success', data)
}, err => {
  console.log('faild', err)
})
