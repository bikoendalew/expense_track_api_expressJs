const jwt=require('jsonwebtoken')

const Auth=(req,res,next)=>{


try{
    const accessToken=req.headers.authorization.replace("Bearer ","")
    const jwt_playload=jwt.verify(accessToken,process.env.jsonSalt)

    req.user=jwt_playload
}catch(e){
    res.status(401).json({
        status:"failed",
        error:"Unauthorized"
    })
    return 
}
  
 next()
}

module.exports=Auth