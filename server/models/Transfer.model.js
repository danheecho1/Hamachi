const mongoose = require('mongoose')
const PersonSchema = require('./Person.model')

const TransferSchema = new mongoose.Schema({
    when: {
        type: Date
    }, 
    amount: {
        type: Number
    }, 
    who: {
        type: Array
    }, 
    whom: {
        type: Array
    }
}, {timestamps: true})

module.exports.Transfer = mongoose.model("Transfer", TransferSchema) 