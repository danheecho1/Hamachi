const mongoose = require('mongoose')
const ExpenseSchema = require('./Expense.model')
const TransferSchema = require('./Transfer.model')

const PersonSchema = new mongoose.Schema({
    personName: {
        type: String
    }, 
    group_id: {
        type: String
    },
    expense: {
        type: Array
    }, 
    transfer: {
        type: Array
    }
}, {timestamps: true})

module.exports.Person = mongoose.model("Person", PersonSchema) 