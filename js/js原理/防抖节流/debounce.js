function debounce(func, delay) {
  let timer = null
  return function() {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.call(this, 'sss')
      clearTimeout(timer)
    }, delay)
  }
}
document.getElementById('app').onclick = debounce( function(s) {
  console.log('onclick')
  console.log(s)
}, 1000)