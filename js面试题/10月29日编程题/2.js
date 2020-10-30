// 用数组reduce方法 实现map
let arr = [1, 3, 5]
Array.prototype.map = function(fn) {
  return this.reduce((pre, curr) => {
    pre.push(fn(curr))
    return pre
  }, [])
}
