const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const UserSchema = new Schema ({
    fullname : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required : true,
        validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
    },
    password : {
        type:String,
        required : true,
        minlength : 6,
    },
    id: {
        type:String
    }
})

module.exports = mongoose.model("userModel",UserSchema,"USER_COLLECTION")