const mongoose =require('mongoose')
const userDashboard= async(req,res)=>{
  const userModel=mongoose.model('user');
  const transactionModel = mongoose.model("transaction");
  const user=await userModel.findOne({_id:req.user._id}).select("-password")
  const transaction=await transactionModel.find({
    user_id:req.user._id
  }).sort("-createdAt").limit(2);
  res.status(200).json({
    status:"Dashboard",
    user:user,
    transaction
  })
}
 
module.exports =userDashboard