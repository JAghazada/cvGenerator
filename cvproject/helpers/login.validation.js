const Joi = require('joi')
const loginhelpers = Joi.object({
    password: Joi.string().required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email : Joi.string().required()
})
module.exports = loginhelpers