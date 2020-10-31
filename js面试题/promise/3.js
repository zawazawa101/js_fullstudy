let obj2 = {
  a: 1
}

let obj3 = new Proxy(obj2, {
  set(...args) {
    return 35  
  }
})



