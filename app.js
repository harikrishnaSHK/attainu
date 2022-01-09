require('dotenv').config()
const express = require('express')
const router = require('./routes/users')
const {connect} = require('./config/db')
const app = express()
connect()
//middleware for data parsing
app.use(express.json())
app.use('/api',router)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

console.log("server is running")

})