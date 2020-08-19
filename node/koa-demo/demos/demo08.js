// next()
const Koa = require('koa')
const app = new Koa() 

const logger = (ctx, next) => { // next是个函数 用来调用下一个方法
  console.log(`${ctx.request.url}-${ctx.request.method}-${Date.now()}`)
  next()
}
const main = ctx => {
  ctx.response.body = 'Hello World' 
} 
app.use(logger)
app.use(main) 
app.listen(3000, () => {
  console.log('项目启动ing')
}) 