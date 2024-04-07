
const mongoose = require('mongoose')
const nodemailer=require('nodemailer');
const emailManager = require('../../../manager/emalManage');

const forgetPassword=async(req,res)=>{
    const userModel=mongoose.model('user');
    const {email}=req.body
    if(!email) throw "email required";
    const getUser =await userModel.findOne({email:email});
    if(!getUser) throw "email not found in the system";

    const resetCode=Math.floor(10000+Math.random() * 90000)

    await userModel.updateOne({email:email},{reset_code:resetCode},{runValidators:true});
    await emailManager(email,"reset code: "+resetCode, "Reset your Password")
   
    res.status(200).json({status:"success",message:"reset code sent to your mail"})





}

module.exports=forgetPassword