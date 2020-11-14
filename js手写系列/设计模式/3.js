// 实现emmiter订阅发布者模式
class Emit{
  handlers = {} // 用来存放事件数组
  on(type, handler) {
    this.handlers[type] ? this.handlers[type].push(handler) : this.handlers[type] = [handler]
  } 
  off(type, handler) {
    if(handler) {
     this.handlers[type] = this.handlers[type].filter(item => item !== handler)
     if(this.handlers[type].length === 0) delete this.handlers[type]
    } else {
      delete this.handlers[type]
    }
  }
  emit(type, ...params) {
    if(!this.handlers[type]) {
      throw new Error('该事件不存在')
    } else {
      this.handlers[type].forEach(handler => {
        handler(...params) 
      })
    }
     
  }
}
// 调用代码
let em = new Emit();
let a1 = (param) => {console.log('a: '  +  param )}
em.on('a', a1);
em.on('a', (param) => {console.log('我是: '  +  param )});
em.off('a', a1)
em.emit('a', '我的名字');


// 控制台输出:  a: 我的名字
