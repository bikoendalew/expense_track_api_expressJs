

const errorHandler=(error,req,res,next)=>{

    if(error){
       res.status(4000).json({
        status:"failed",
        error:error
       })
    }else{
        next();
    }
}

module.exports = errorHandler