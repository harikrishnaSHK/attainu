require('dotenv').config()
const jwt = require('jsonwebtoken')
exports.auth = function middleware(req,res,next){

    const auth = req.headers.authorization
    if(auth){
    const token  = auth.split(' ')[1]
    
    try{
     const result = jwt.verify(token,process.env.JWT_SCERET)
    
     next()
    
    }
    
    catch(err){
    
     console.log(err)   
    res.json({
    
    data:"authentication error",
    succes:false
    
    })
    
    }
    
    
    
    
    }
    
    else{
    
    res.json({
    
    data:"Please login first",
    sucess:false
    
    })
    
    }
    
    
    }