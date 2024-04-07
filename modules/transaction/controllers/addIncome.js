const mongoose = require("mongoose");
const validator = require('validator');

const addIncome =async (req, res) => {
  const userModel = mongoose.model("user");
  const transactionModel = mongoose.model("transaction");

  const { amount, remark } = req.body;
  if (!amount) throw "Amount Required";
  if (!remark) throw "Remark Required";

  if (remark.length < 5) throw "must be greater than 5 character long";

  if(!validator.isNumeric(amount.toString())) throw "Amount must be numberic";

  await transactionModel.create({
    user_id:req.user._id,
    amount:amount,
    remark:remark,
    transactionType:'income'
  })

  await userModel.updateOne({_id:req.user._id},{$inc:{
    balance:amount
  }},{runValidators:true})

  res.status(200).json({ 
    status: "success", 
    message:"income added succesfully"
});
};

module.exports = addIncome;
