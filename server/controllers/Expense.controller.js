const {Expense} = require('../models/Expense.model')

module.exports.createExpense = (req, res) => {
    Expense.create(req.body)
        .then(project => res.json(project))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllExpenses = (req, res) => {
    Expense.find({})
        .then(expenses => res.json(expenses))
        .catch(err => res.json(err))
}

module.exports.getOneExpense = (req, res) => {
    Expense.findOne({_id: req.params.id})
        .then((foundExpense) => {
            res.json({results: foundExpense})
        })
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.updateExpense = (req, res) => {
    Expense.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedExpense => res.json(updatedExpense))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteExpense = (req, res) => {
    Expense.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}