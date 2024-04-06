
const userDashboard=(req,res)=>{
  res.status(200).json({
    status:"Dashboard",
    user:req.user
  })
}
 
module.exports =userDashboard