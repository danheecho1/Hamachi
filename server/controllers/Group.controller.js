const {Group} = require('../models/Group.model')

module.exports.createGroup = (req, res) => {
    Group.create(req.body)
        .then(group => res.json(group))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllGroups = (req, res) => {
    Group.find({})
        .then(groups => res.json(groups))
        .catch(err => res.json(err))
}

module.exports.getOneGroup = (req, res) => {
    Group.findOne({_id: req.params.id})
        .then((foundGroup) => {
            res.json({results: foundGroup})
        })
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.updateGroup = (req, res) => {
    Group.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedGroup => res.json(updatedGroup))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteGroup = (req, res) => {
    Group.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}