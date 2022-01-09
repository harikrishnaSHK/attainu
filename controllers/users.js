require('dotenv').config()
const userModel = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//method to craete a users(signup)

exports.signUp = async (req,res,next)=>{

const {username,password} = req.body

const user = new userModel({username,password})

try{
const data = await user.save()

res.json({

data:data,
sucess:true

})

}
catch(err){

    console.log(err)

    res.json({

        data:"Error in creating the data",
        sucess:false
        
        })

}


}

//method to check login

exports.login = async (req,res,next)=>{

const {username ,password} = req.body

try{

const user = await userModel.findOne({username})


try{

const match = await bcrypt.compare(password,user.password)

if(match){

const payload = {username : user.username}
const secret = process.env.JWT_SCERET
const options = {expiresIn:process.env.EXPIRES}
const token = jwt.sign(payload,secret,options)
res.json({

data :user,
sucess:true,
token:token


})



}

else{

res.json({

data:"username or password is wrong",
sucess:false

})

}

}
catch(err){

res.json({

data :"Error in compare method",
suces:false,


})


}



}
catch(err){
res.json({
data:"Username doesnot exists",
sucess:false
})

}


}

//Metod for dashboard

exports.getProduct = async (req,res,next)=>{


res.send("From dashBoard")


}