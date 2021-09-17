const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (req,res,next)=>{
    try{
        //redirect home page
        const token = req.headers.authorization.split(" ")[1]
        const decode = jwt.verify(token,process.env.ACCESS_TOKEN)
        return res.status(200).send({
            message : "Login is successful",
            status:1
        })
        next()
    }catch(err){
        if(err.name === "TokenExpiredError"){
            //redirect login page
            return res.status(401).send({
                message :"Login session is expired",
                status :-1
            })
        }
        else if(err.name === "JsonWebTokenError"){
            //redirect login page
            console.log(err)
            return res.status(401).send({
                message :"Token is wrong or changed",
                status :-1
            })
        }else{
            //redirect login
            return res.status(401).send({
                message :"Please,signup",
                status :-1
            })
        }
    }
}