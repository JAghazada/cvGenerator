const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decode = jwt.verify(token,process.env.ACCESS_TOKEN)
        next()
    }catch(err){
        if(err.name === "TokenExpiredError"){
            return res.status(401).send({
                message :"Login session is expired",
                status :-1
            })
        }
        else if(err.name === "JsonWebTokenError"){
            return res.status(401).send({
                message :"Token is wrong or changed",
                status :-1
            })
        }else{
            return res.status(401).send({
                message :"Please,signup",
                status :-1
            })
        }
    }
}