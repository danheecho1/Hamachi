const {Transfer} = require('../models/Transfer.model')

module.exports.createTransfer = (req, res) => {
    Transfer.create(req.body)
        .then(transfer => res.json(transfer))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllTransfers = (req, res) => {
    Transfer.find({})
        .then(transfers => res.json(transfers))
        .catch(err => res.json(err))
}

module.exports.getOneTransfer = (req, res) => {
    Transfer.findOne({_id: req.params.id})
        .then((foundTransfer) => {
            res.json({results: foundTransfer})
        })
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.updateTransfer = (req, res) => {
    Transfer.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedTransfer => res.json(updatedTransfer))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteTransfer = (req, res) => {
    Transfer.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}