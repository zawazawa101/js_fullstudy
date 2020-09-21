// 单链队列

class Queue {
  constructor() {
    this.queue = []
  }
  enQueue(item) {
    this.queue.push(item)
  }
  deQueue() {
    return this.queue.shift()
  }
  getHeader() {
    return this.queue[0]
  }
  getLength() {
    return this.queue.length
  }
}


// 循环队列
class SqQueue{
  constructor(length) {
    this.queue = new Array(length + 1)
    // 指明队列的队头
    this.first = 0
    // 队尾
    this.last = 0
    // 当前队列的大小
    this.size = 0
  }
  enQueue(item) {
    // 判断队尾 + 1 是否为队头
    // 如果是队头 就要扩容数组
    // % this.queue.length 防止数组越界
    if (this.first === (this.last + 1) % this.queue.length) {
      this.resize(this.getLength() * 2 + 1)
    }
    this.queue[this.last] = item
    this.size++
    this.last = (this.last + 1) %  this.queue.length
  }
  resize() {
    let q = new Array(length)
    for (let i = 0; i < length; i++) {
      q[i] = this.queue[(i + this.first) % this.queue.length]
    }
    this.queue = q
    this.first = 0
    this.last = q.length - 1
  }
  getLength() {
    return this.queue.length - 1
  }
}