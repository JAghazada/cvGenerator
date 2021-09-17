const express= require('express')
const Router =express.Router()
require('dotenv').config()
const bcrypt  = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginauth = require('../helpers/loginauth')
const database = require('../helpers/mongodb.connection')
const loginhelpers = require('../helpers/login.validation')
Router.post('/login',async(req,res,next)=>{
    const errors =[]
    try {
        const {name,email,surname,password} =req.body
        const result = loginhelpers.validateAsync(req.body)
        
        const userIsExist = await database.models.userModel.findOne({
            email
        })
        if(!userIsExist){
            errors.push({
                message:"User is not exsist",
                status : -1
            })
            return res.status(401).send(errors)
        }
        const find = await bcrypt.compare(password,userIsExist.password)
        if(!find){
            errors.push({
                message:"Password is wrong",
                status :-1
            })
            return res.status(401).send(errors)
        }
        const token=await jwt.sign({
            name,
            email,
            surname,
            exp:Math.floor(Date.now()/1000)+39600
        },process.env.ACCESS_TOKEN)
        res.send(token)
        next()
    }
    catch(error){
        console.log(err)
        if(error.isJoi){
            console.log('sen ol error bash verdi qaqa')
            res.status(400).send()
            console.log(error.message)
            
            return error.message
        }else{
            res.status(401).send()
            console.log(error.message)
            return error.message
        }
    }
})
Router.post('/posts',loginauth,(req,res,next)=>{
    res.send("<happy hacking>")
})
// Router.get('/posts',authenticateToken,(req,res,next)=>{
//     res.json(posts.filter(post=>post.username === req.user.name))
// })
// function authenticateToken(req,res,next){
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split('.')[1]
//     if(token === null){
//         res.status(401).send()
        
//     }else{
//         jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
//             if(err){
//                 return res.sendStatus(401)
//             }
//             req.user =user 
//             next()
//         })
//     }
// }
module.exports = Router