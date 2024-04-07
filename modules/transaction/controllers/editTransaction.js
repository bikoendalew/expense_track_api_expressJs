const mongoose=require('mongoose');
const validator=require('validator');

const editTransaction=async(req,res)=>{
    const transactionModel = mongoose.model("transaction");
    const userModel=mongoose.model("user");
    const { id, remark}=req.body
 
    if(!id) throw "id required"
    if(!validator.isMongoId(id.toString())) throw "enter valid id";

    const getTransaction=transactionModel.findOne({_id:id});
    if(!getTransaction) throw "transaction not found"
  
    await getTransaction.updateOne({_id:id}, {
       
        remark:remark,
      
    },{runValidators:true})
    res.status(200).json({
        status:"success",
        message:"Updated"
    });

}

module.exports=editTransaction