require('express-async-errors')
const express = require('express');
const errorHandler = require('./handlers/errorHandler');


const app=express();
app.use(express.json());


app.use(errorHandler);
app.listen(4000,()=>{
    console.log("RUNNING");
})