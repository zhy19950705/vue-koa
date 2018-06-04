const mongoose=require('mongoose')  //引入Mongoose
const Schema=mongoose.Schema  //声明Schema
const bcrypt=require('bcrypt')
let ObjectId=Schema.Types.ObjectId  //声明Object类型
const SALT_WORK_FACTOR=10; //定义加密密码计算强度

// 创建用户Schema
const userSchema=new Schema({
    UserId:ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()}
})

// 每次存储数据都要执行，使用pre中间件在用户信息存储前进行加密
userSchema.pre('save', function(next){
    //let user = this
    console.log(this)
    bcrypt.genSalt( SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err)
        bcrypt.hash(this.password,salt, (err,hash)=>{
            if(err) return next(err)
            this.password = hash
            next()
        }) 
 
    })
})

// 发布模型
mongoose.model('User',userSchema)