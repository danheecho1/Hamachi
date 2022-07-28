const { Group } = require('../models/Group.model')
const {Person} = require('../models/Person.model')

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllPersons = (req, res) => {
    Person.find({group_id: req.params.groupId})
        .then(persons => res.json(persons))
        .catch(err => res.json(err))
}

module.exports.getOnePerson = (req, res) => {
    Person.findOne({_id: req.params.id})
        .then((foundPerson) => {
            res.json({results: foundPerson})
        })
        .catch(err => {
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.updatePerson = (req, res) => {
    Person.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePerson = (req, res) => {
    Person.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.createPersonV2 = (req, res) => {
    Group.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true})
        .then(updatedGroup => res.json(updatedGroup))
        .catch(err => res.status(400).json(err))
}