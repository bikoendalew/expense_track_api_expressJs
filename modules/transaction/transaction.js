const express=require('express')
const Auth = require('../../middleware/auth')
const addIncome=require('./controllers/addIncome')
const transactionRoutes=express.Router()

// transactionRoutes.post('/')

transactionRoutes.use(Auth)
transactionRoutes.post('/addIncome',addIncome)

module.exports=transactionRoutes