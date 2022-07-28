const PersonController = require("../controllers/Person.controller")

module.exports = (app) => {
    
    app.get('/api/groups/:groupId/persons', PersonController.getAllPersons)
    app.get('/api/groups/:groupId/persons/:id', PersonController.getOnePerson)
    app.post('/api/groups/:groupId/persons', PersonController.createPerson)
    app.put('/api/groups/:groupId/persons/:id', PersonController.updatePerson)
    app.delete('/api/groups/:groupId/persons/:id', PersonController.deletePerson)
}
