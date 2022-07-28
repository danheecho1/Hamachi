const ExpenseController = require("../controllers/Expense.controller")

module.exports = (app) => {
    app.get('/api/expenses', ExpenseController.getAllExpenses)
    app.get('/api/expenses/:id', ExpenseController.getOneExpense)
    app.post('/api/expenses', ExpenseController.createExpense)
    app.put('/api/expenses/:id', ExpenseController.updateExpense)
    app.delete('/api/expenses/:id', ExpenseController.deleteExpense)
}