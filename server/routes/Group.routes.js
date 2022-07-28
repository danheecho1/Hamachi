const GroupController = require("../controllers/Group.controller")

module.exports = (app) => {
    app.get('/api/groups', GroupController.getAllGroups)
    app.get('/api/groups/:id', GroupController.getOneGroup)
    app.post('/api/groups', GroupController.createGroup)
    app.put('/api/groups/:id', GroupController.updateGroup)
    app.delete('/api/groups/:id', GroupController.deleteGroup)
}