const express=require('express')
const Auth = require('../../middleware/auth')
const addIncome=require('./controllers/addIncome')
const addExpense = require('./controllers/addExpense')
const getTransaction = require('./controllers/getTransaction')
const deleteTransaction = require('./controllers/deleteTransaction')
const transactionRoutes=express.Router()

// transactionRoutes.post('/')

transactionRoutes.use(Auth)

transactionRoutes.post('/addIncome',addIncome)
transactionRoutes.post('/addExpense',addExpense)
transactionRoutes.get('/getTransaction',getTransaction)
transactionRoutes.delete('/:id',deleteTransaction)

module.exports=transactionRoutes