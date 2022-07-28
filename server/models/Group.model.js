const mongoose = require('mongoose')
const PersonSchema = require('./Person.model')
const ExpenseSchema = require('./Expense.model')
const TransferSchema = require('./Transfer.model')

const GroupSchema = new mongoose.Schema({
    groupName: {
        type: String, 
        required: [true, "Group name is required"]
    }, 
    person: {
        type: Array
    }, 
    expense: {
        type: Array
    }, 
    transfer: {
        type: Array
    }
}, {timestamps: true})

module.exports.Group = mongoose.model("Group", GroupSchema) 