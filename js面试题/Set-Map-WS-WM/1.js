let obj = {
  a: 'A'
}

let map = new Map()
map.set(obj, 'A')
// let wm = new WeakMap()
// wm.set(obj, 'A')
obj = {
  b: 'B'
}
// console.log(wm);
console.log(map);




