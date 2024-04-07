const mongoose=require('mongoose');
const validator=require('validator');

const deleteTransaction=async(req,res)=>{
    const transactionModel = mongoose.model("transaction");
    const userModel=mongoose.model("user");
    const {id}=req.params
    if(!validator.isMongoId(id.toString())) throw "enter valid id";
    const getTransaction=transactionModel.findOne({_id:id});
    if(!getTransaction) throw "transaction not found"
  
    const type=getTransaction.transactionType
    const amount=getTransaction.amount

    if(type==="income"){
        await userModel.updateOne({_id:getTransaction.user_id},{$inc:{balance:amount*-1}},{runValidators:true})
    }else{
        await userModel.updateOne({_id:getTransaction.user_id},{$inc:{balance:amount}},{runValidators:true})
    }
   
    await transactionModel.deleteOne({_id:id});
    res.status(200).json({
        status:"success",
        message:"DELETED"
    });

}

module.exports=deleteTransaction