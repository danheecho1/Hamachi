const TransferController = require("../controllers/Transfer.controller")

module.exports = (app) => {

    app.get('/api/transfers', TransferController.getAllTransfers)
    app.get('/api/transfers/:id', TransferController.getOneTransfer)
    app.post('/api/transfers', TransferController.createTransfer)
    app.put('/api/transfers/:id', TransferController.updateTransfer)
    app.delete('/api/transfers/:id', TransferController.deleteTransfer)
}