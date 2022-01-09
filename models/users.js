const mongoose  = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema  = new mongoose.Schema({

username:{
type:'String',
required:[true,"username is mandatory"],
unique:true,
minlength :[5,"username should be between 5 to 10 charcters"],
maxlength: [10,"username should be between 5 to 10 charcters"],

},

password :{

type:'String',
required:true

},

createdAt :{

type:'String'

}




})


userSchema.pre('save',function(next){

const user = this
user.createdAt = Date.now()

if(!user.isModified || !user.isNew){

    next()
}

else{

bcrypt.hash(user.password,10,function(err,hash){

if(err){

console.log("Error in hasing")
next(err)


}
else{

user.password = hash
next()

}



})


}



})


const user = mongoose.model('user',userSchema)


module.exports = user