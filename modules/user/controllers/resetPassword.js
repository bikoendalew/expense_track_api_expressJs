const mongoose = require('mongoose')
const nodemailer=require('nodemailer')
const bcrypt=require('bcrypt');

const resetPassword=async(req,res)=>{
    const userModel=mongoose.model('user');
    const{email,new_password,resetCode}=req.body 

    if(!email) throw "email required";
    if(!new_password) throw "password required";
    if(!resetCode) throw "reset code required";

    const getUser= await userModel.findOne({email:email,reset_code:resetCode});
    if(!getUser) throw "reset code doesn't much";
    const hashedPassword=await bcrypt.hash(new_password,12)

    await userModel.updateOne({email:email},{password:hashedPassword,reset_code:""},{runValidators:true})

    res.status(200).json({status:"success",message:"succesfully updated password"});

}

module.exports=resetPassword