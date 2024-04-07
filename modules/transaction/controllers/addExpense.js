const mongoose = require("mongoose");
const validator = require('validator');

const addExpense =async (req, res) => {
  const userModel = mongoose.model("user");
  const transactionModel = mongoose.model("transaction");

  const { amount, remark } = req.body;
  if (!amount) throw "Amount Required";
  if (!remark) throw "Remark Required";

  if (remark.length < 5) throw "must be greater than 5 character long";

  if(!validator.isNumeric(amount.toString())) throw "Amount must be numberic";
  if(amount<0) throw "amount must not be negative";

  await transactionModel.create({
    user_id:req.user._id,
    amount:amount,
    remark:remark,
    transactionType:'expense'
  })

  await userModel.updateOne({_id:req.user._id},{$inc:{balance:amount* -1}
    
  },{runValidators:true})

  res.status(200).json({ 
    status: "success", 
    message:"expense added succesfully"
});
};

module.exports = addExpense;
