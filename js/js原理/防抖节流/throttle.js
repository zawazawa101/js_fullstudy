// 节流， 在规定的时间内只触发一次
function throttle(fn, delay) {
  // 利用闭包保存时间
  let prev = Date.now()
  return function() {
    let now = Date.now()
    if (now - prev >= delay) {
      fn.call(this, 'sss')
      prev = Date.now()
    }
  }
}
document.getElementById('app').addEventListener('click',throttle(fn, 1000))
function fn (s) {
  console.log(s);
  console.log('节流');
}