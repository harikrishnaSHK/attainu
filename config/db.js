require('dotenv').config()
const mongoose = require('mongoose')

exports.connect = ()=>{mongoose.connect(process.env.MONGO_URI,

{

useNewUrlParser : true,
useUnifiedTopology : true

})

const db = mongoose.connection
db.on("error" , function(){console.log("connection error")})
db.once("open",function(){

    console.log("connected sucessfully")
})
}