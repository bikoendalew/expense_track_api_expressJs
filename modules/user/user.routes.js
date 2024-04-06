const express=require('express')
const Register = require('./controllers/register')
const userRouters=express.Router()

userRouters.post('/register',Register);

module.exports =userRouters