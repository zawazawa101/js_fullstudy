class Event{
  constructor() {
    this.listener = {
      // price: [],
      // click: []
    }
  }
  on(name, cb) {
    if (this.listener[name] === undefined) {
      this.listener[name] = []
    }
    this.listener[name].push({
      cb: cb,
      once: false
    })
  } // 订阅
  emit(name) {
    // for(let cb of this.listener[name]) {
    //   cb()
    // }
    for(let item of this.listener[name]) {
      item.cb()
    }
    this.listener[name] = this.listener.name.filter(item => !item.once)
    
  } // 发布
  once(name, cb) {
    if(this.listener[name] === undefined) {
      this.listener[name] = []
    }
    this.listener[name].push({
      cb: cb,
      once: true
    })
  }
}
const ev = new Event()

ev.on('price', () => {
  console.log('price change');
})

ev.on('click', () => {
  console.log('click change');
})

ev.emit('price')