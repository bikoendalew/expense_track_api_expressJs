const jwt=require('jsonwebtoken')
const JwtManager=(user)=>{

    const accessToken=jwt.sign({
        _id:user._id,
        name:user.name
       },process.env.jsonSalt);


    return accessToken
}

module.exports = JwtManager