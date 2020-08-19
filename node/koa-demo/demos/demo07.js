// 获取请求地址 方式 时间戳

const Koa = require('koa')
const route = require('koa-route')

const app = new Koa()

const main = ctx => {
  // console.log(ctx.response)
  ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${Date.now()}`
}
app.use(main)
app.listen(3000)