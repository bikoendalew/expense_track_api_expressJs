const express=require('express')
const Auth = require('../../middleware/auth')
const addIncome=require('./controllers/addIncome')
const addExpense = require('./controllers/addExpense')
const transactionRoutes=express.Router()

// transactionRoutes.post('/')

transactionRoutes.use(Auth)

transactionRoutes.post('/addIncome',addIncome)
transactionRoutes.post('/addExpense',addExpense)

module.exports=transactionRoutes