const mod = require('./a')
console.log(mod.c);
console.log(mod.obj);

mod.inc()
console.log(mod.c);
console.log(mod.obj);

// 导入的值就是 把导出的值 复制(拷贝)一份过来(类似于赋值操作)
// 如果一个模块被require了两次，它会把上一次的结果缓存起来





