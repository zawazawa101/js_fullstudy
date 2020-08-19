// 如he往前端传递数据
const Koa = require('koa')
const app = new Koa() // 定义一个新的koa实例 

const main = ctx => {
  ctx.response.body = 'Hello World' // 给前端提供 'Hello World'字符串
} 
app.use(main) // 此时main中的参数ctx是koa是上下文参数

app.listen(3000, () => {
  console.log('项目启动ing')
}) // 3000是端口号  