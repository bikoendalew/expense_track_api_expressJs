const express=require('express')
const Register = require('./controllers/register');
const login = require('./controllers/login');
const userDashboard = require('./controllers/userDashboard');
const Auth = require('../../middleware/auth');
const forgetPassword = require('./controllers/forgetPassword');
const resetPassword = require('./controllers/resetPassword');
const userRouters=express.Router()

userRouters.post('/register',Register);
userRouters.post('/login', login)
userRouters.post('/forgetP',forgetPassword);
userRouters.post('/resetP',resetPassword);

userRouters.use(Auth)
//protected user
userRouters.get('/dashboard',userDashboard)

module.exports =userRouters