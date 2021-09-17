const express= require('express')
const Router =express.Router()
require('dotenv').config()
const jwt = require('jsonwebtoken')
const loginauth = require('../helpers/loginauth')
const database = require('../helpers/mongodb.connection')
const mans = [
    {"username":"dasd"},
    {"username":"fasf"}
]
Router.post('/login',(req,res,next)=>{
    const {name,email,surname} =req.body
    const token=jwt.sign({
        name,
        email,
        surname,
        exp:Math.floor(Date.now()/1000)+62
    },process.env.ACCESS_TOKEN)
    res.send(token)
    next()
    
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