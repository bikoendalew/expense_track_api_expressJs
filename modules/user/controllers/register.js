const mongoose =require('mongoose')
const bcrypt=require('bcrypt')

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
await userModel.create({
    name:name,
    email:email,
    password:hashedPassword,
    balance:balance
})
   res.status(200).json({
     status:"User Registerd Succesfully",
   })
}
module.exports=Register