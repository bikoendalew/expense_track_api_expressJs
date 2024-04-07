const mongoose=require('mongoose');
const getTransaction=async(req,res)=>{

    const userModel = mongoose.model("user");
    const transactionModel = mongoose.model("transaction");
     console.log(req.query)
    const transactions=await transactionModel.find({
        user_id:req.user._id,
        ...req.query
    });

   

    res.status(200).json({
        status:"success",
        transactions:transactions
    });

}

module.exports =getTransaction