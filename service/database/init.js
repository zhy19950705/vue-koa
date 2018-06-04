const mongoose = require('mongoose')
const glob=require('glob')//允许使用*等符号
const {resolve}=require('path')//解析为绝对路径
const db = 'mongodb://localhost/smile-db'

mongoose.Promise = global.Promise

exports.connect = () => {
  // 链接数据库
  mongoose.connect(db)

  let maxConnectTimes = 0;

  return new Promise((resolve, reject) => {
    // 增加数据库链接的事件监听
    mongoose.connection.on('disconnected', () => {
      console.log('数据库断开');
      if(maxConnectTimes<3){
          maxConnectTimes++;
          mongoose.connect(db)
      }else{
          reject();
          throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
      }
    })

    //数据库出现错误的时候
    mongoose.connection.on('err', err => {
      console.log('数据库错误');
      if(maxConnectTimes<3){
          maxConnectTimes++;
          mongoose.connect(db)
      }else{
          reject();
         throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
      }
    })

    mongoose.connection.once('open', () => {
      console.log('connected');
      resolve()
    })
  })
}

exports.initSchemas=()=>{
  //glob.sync同步引入所有schema文件
  glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}
