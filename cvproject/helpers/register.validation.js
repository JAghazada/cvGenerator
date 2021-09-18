const Joi = require('joi')
const registerhelpers = Joi.object({
    fullname: Joi.string().min(5).max(28).required(),
    password: Joi.string().required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password : Joi.ref('password'),
    email : Joi.string()
})
module.exports = registerhelpers