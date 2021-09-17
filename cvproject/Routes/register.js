const express = require('express')
const registerhelpers = require('../helpers/register.validation')
const bcrypt = require('bcrypt')
const Router = express.Router()
const {v4:uuidv4} = require('uuid')
const errors = []
const database  = require('../helpers/mongodb.connection')
    Router.get('/',(req,res)=>{
        res.send(200)
    })
    Router.post('/register',async (req,res)=>{
        try {
            const result = await registerhelpers.validateAsync(req.body)
            const {name,surname,password,email} = req.body
            console.log(result)
            let mailIsExist  = await database.models.userModel.findOne({
                email
            })
            if(mailIsExist){
                errors.push({
                    message:"Email is already exsist"
                })
                res.send(errors)
                return errors
            }else{
                try{
                    console.log('geldi')
                    let Password = await bcrypt.hash(password,15)
                    let id = uuidv4()
                    let newUser = await database.models.userModel({
                        id,
                        firstname:name,
                        surname,
                        email,
                        password:Password
                    })
                    await newUser.save()
                    res.send(200)
                }catch(err){
                    console.log(err)
                    res.status(405).send()
                }
            }
        }
        catch(error) { 
            console.log(error)
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
module.exports = Router
