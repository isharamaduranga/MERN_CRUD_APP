/** import to require mongoose */
const mongoose = require("mongoose");

/** Create a Schema for send data model to Mongodb database */
const itemSchema = new mongoose.Schema({

    itemCode:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    itemQty:{
        type: Number,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('Items',itemSchema);