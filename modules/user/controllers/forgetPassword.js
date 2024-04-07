
const mongoose = require('mongoose')
const nodemailer=require('nodemailer')

const forgetPassword=async(req,res)=>{
    const userModel=mongoose.model('user');
    const {email}=req.body
    if(!email) throw "email required";
    const getUser =await userModel.findOne({email:email});
    if(!getUser) throw "email not found in the system";

    const resetCode=Math.floor(10000+Math.random() * 90000)

    await userModel.updateOne({email:email},{reset_code:resetCode},{runValidators:true});

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user:process.env.email_user,
          pass: process.env.email_password
        }
      });
      
      await transport.sendMail({
        to:email,
        from:"info@expensetracker.com",
        text:"reset code :"+resetCode,
        subject:"Reset Your Password"
      })

    res.status(200).json({status:"success",message:"reset code sent to your mail"})





}

module.exports=forgetPassword