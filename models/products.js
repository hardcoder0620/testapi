const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    qty:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product',productsSchema)