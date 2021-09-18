const Mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URL=  process.env.MONGODB_URL
console.log(MONGODB_URL)
Mongoose.connect(
    MONGODB_URL,
    {useNewUrlParser:true,
    useUnifiedTopology : true}
)
const database = Mongoose.connection
database.once("open",()=>{
    require('./init_mongodb')
})
module.exports = database