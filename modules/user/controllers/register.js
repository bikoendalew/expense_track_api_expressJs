const mongoose =require('mongoose')
const bcrypt=require('bcrypt');
const { create } = require('../../../models/user.model');
const jwt =require('jsonwebtoken');
const JwtManager = require('../../../manager/jwtManager');
const nodemailer=require('nodemailer')

const Register= async (req,res)=>{
    const userModel=mongoose.model('user');
    const{name,email,password,password_confirm,balance}=req.body 
  
const duplicationError=await userModel.findOne({email:email});
//validation 
if(!name) throw "name required"
if(!email) throw "email required"
if(!password) throw "password required"
if(password.length <5) throw "password must be greater than 5 character"
if(!password_confirm) throw "Enter confirm password"
if(password!==password_confirm) throw "confirm password"

if(duplicationError)throw "Email already registerd"

const hashedPassword=await bcrypt.hash(password,12)
const createUser= await userModel.create({
    name:name,
    email:email,
    password:hashedPassword,
    balance:balance
})
const accessToken= JwtManager(createUser)

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user:process.env.email_user,
    pass: process.env.email_password
  }
});

await transport.sendMail({
  to:createUser.email,
  from:"info@expensetracker.com",
  text:"welcome to our expense tracker app",
  subject:"welcome to expense tracker"
})
   res.status(200).json({
     status:"User Registerd Succesfully",
     accessToken:accessToken
   })
}
module.exports=Register