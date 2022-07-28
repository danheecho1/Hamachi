const mongoose = require('mongoose')
const PersonSchema = require('./Person.model')

const ExpenseSchema = new mongoose.Schema({
    forWhat: {
        type: String
    }, 
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

module.exports.Expense = mongoose.model("Expense", ExpenseSchema) 