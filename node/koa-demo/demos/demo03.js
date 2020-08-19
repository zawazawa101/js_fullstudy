
const Koa = require('koa')
const app = new Koa() // 定义一个新的koa实例 

const main = ctx => {
  if (ctx.request.accepts('xml')){ // ctx.request.accepts 检查http请求的accept的内容
    ctx.response.type = 'xml'
    ctx.response.body = '<data>Hello World</data>'// Accept属于请求头，代表客户端希望接受的数据类型，跟Content-type类似
  }else if(ctx.request.accepts('html')){
    ctx.response.type = 'html'
    ctx.response.body = '<p>Hello World</p>'
  }else if(ctx.request.accepts('json')){
    ctx.response.type = 'json'
    ctx.response.body + '{data: Hello World}'
  }else{
    ctx.response.type = 'text'
    ctx.response.body = 'Hello World'
  }
} 
app.use(main) // 此时main中的参数ctx是koa是上下文参数

app.listen(3000, () => {
  console.log('项目启动ing')
}) // 3000是端口号  