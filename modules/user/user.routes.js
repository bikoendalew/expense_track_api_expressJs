const express=require('express')
const Register = require('./controllers/register');
const login = require('./controllers/login');
const userDashboard = require('./controllers/userDashboard');
const Auth = require('../../middleware/auth');
const userRouters=express.Router()

userRouters.post('/register',Register);
userRouters.post('/login', login)

userRouters.use(Auth)
//protected user
userRouters.get('/dashboard',userDashboard)

module.exports =userRouters