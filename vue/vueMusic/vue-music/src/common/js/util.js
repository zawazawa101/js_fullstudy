// 防抖函数
export function debounce(func, delay) {
  let timer
  return function(...args) {
    let that = this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(that, args)
      timer = null
    }, delay); 
  }
}

export function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}