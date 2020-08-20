const Koa = require('koa')
const app = new Koa()

const handle = async (ctx, next) => {
  // 捕捉错误 如果出错，直接输出一个错误页面 用p标签装内容 (something error， you should concat adminster)
  try{
    await next()
  }catch(err){
    ctx.response.status = err.statusCode | err.status | 500
    ctx.response.type = 'html'
    ctx.response.body = "<p>something error， you should concat adminster<p/>"
    ctx.app.emit('error', err ,ctx)
  }
}
const main = ctx => {
  ctx.throw(500)
}

app.on('error', function(err) { // 后端监听 代码运行是否出错
  console.log(err)
  console.log('logger error', err.message)
})

app.use(handle)
app.use(main)
app.listen(3000)