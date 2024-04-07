const mongoose =require('mongoose')
const userDashboard= async(req,res)=>{
  const userModel=mongoose.model('user')
  const user=await userModel.findOne({_id:req.user._id}).select("-password")
  res.status(200).json({
    status:"Dashboard",
    user:user
  })
}
 
module.exports =userDashboard