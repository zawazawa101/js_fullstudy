const Koa = require('koa')
const app = new Koa()
const compose = require('koa-compose')
const main = ctx =>{

}
const logger = ctx => {

}
const middleware = compose([logger, main])
app.use(middleware)
app.listen(3000)
