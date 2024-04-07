const mongoose=require('mongoose')

const transactionSchema=new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    transactionType:{
        type:String,
        required:true,
        enum:["income","expense"]
    },
    remark:{
        type:String,
        required:true
    }
    
},{timestamps:true})
const transactionModel=mongoose.model('transaction',transactionSchema)
module.exports=transactionModel