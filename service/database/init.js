const mongoose=require('mongoose')
const db='mongodb://localhost/smile-db'

mongoose.Promise=global.Promise

exports.connect=()=>{
    // 链接数据库
    mongoose.connect(db)

    // 增加数据库链接的事件监听
    mongoose.connection.on('disconnected',()=>{
        // 进行重连
        mongoose.connect(db)
    })

    //数据库出现错误的时候
    mongoose.connection.on('err',err=>{
        console.log(err)
        mongoose.connect(db)
    })

    mongoose.connection.once('open',()=>{
        console.log('connected')
    })
}