require('express-async-errors')
require('dotenv').config()
const express = require('express');
const mongoose=require('mongoose')
const errorHandler = require('./handlers/errorHandler');



const app=express();
app.use(express.json());

//model
require('./models/user.model.js')

app.use(errorHandler);
mongoose.connect(process.env.mongoDB,{}).then(()=>{
    app.listen(4000,()=>{
        console.log("RUNNING");
    })
}).catch(()=>{
    console.log("NOT CONNECTED");
})