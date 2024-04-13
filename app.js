const express = require('express')
const app = express()
const path = require('path')
const helmet = require('helmet')
const hpp = require('hpp')
const cors  = require('cors')
const mongoose = require('mongoose')


//Security modules
app.use(helmet())
app.use(hpp())
app.use(cors())


//Database connection
mongoose.connect('mongodb://localhost:27017/fullstack').then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log(err)
})


//Connect to Frontend
app.use(express.static('client/dist'))
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})





module.exports = app;