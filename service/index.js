const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const {
  connect,
  initSchemas
} = require('./database/init.js')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')// 接收前端发送的请求
const cors = require('koa2-cors')// 跨域中间件
app.use(cors())

let user = require('./appApi/User')
let router = new Router()

router.use('/user', user.routes())

app.use(router.routes())
app.use(router.allowedMethods())
app.use(bodyParser())

// 立即执行函数
;
(async () => {
  await connect()
  initSchemas()
  const User = mongoose.model('User')
  // let oneUser=new User({userName:'hanhan',password:'123456'})
  // oneUser.save().then(()=>{
  //     console.log('插入成功')
  // })

  let users = await User.findOne({}).exec()
  console.log('----')
  console.log(users)
  console.log('---')
})()

app.use(async (ctx) => {
  ctx.body = '<h1>hello koa2</h1>'
})

app.listen(3000, () => {
  console.log('running on 3000')
})

process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error)
  process.exit(1) // To exit with a 'failure' code
})
