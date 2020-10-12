// vue3 响应式原理

let toProxy = new WeakMap() // 弱引用映射表, 放置的的被代理的对象
let toRaw = new WeakSet() //  被代理过的对象：原对象

// 判断是否是对象
const isObj = (val) => val !== null && typeof val == 'object'

function reactive(target) { // 响应式核心方法
  // 创建响应式的对象
  return createReactiveObject(target)
}

function createReactiveObject(target) {
  if (!isObj(target)) { // 如果当前不是对象 直接返回
    return target
  }

  let proxy = toProxy.get(target)
  if(proxy) {
    return proxy
  }
  if(toRaw.has(target)) { // 防止代理过的对象被重复代理
    return target
  }

  let baseHandler = {
    // Reflect 会替换掉 Object 上的方法 不会报错且会有返回值
    get (target, key, receiver) {
      // proxy + reflect 反射
      console.log('获取');
      let result = Reflect.get(target, key, receiver)
    
      return isObj(result) ? reactive(result) : result
    },
    set (target, key, value, receiver) {
      console.log('设置');
      let res = Reflect.set(target, key, value, receiver)
      // target[key] = value // 如果设置没成功， 如果对象不可以被更改
      return res
    },
    deleteProperty(target, key) {
      console.log('删除');
      let res = Reflect.deleteProperty(target, key)
      console.log(res);
      return res
    }
  }

  let observed = new Proxy(target, baseHandler)
  toProxy.set(target, observed)
  toRaw.add(observed, target)
  return observed
}

let obj =  {
  name: {
    n: 'dd'
  }
}
 
// 代理对象
let proxy = reactive(obj)

// delete proxy.name
console.log(proxy.name.n);

