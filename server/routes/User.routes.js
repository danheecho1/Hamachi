const UserController = require("../controllers/User.controller");

module.exports = (app)=>{
    app.get("/api/users", UserController.getAllUsers)
    app.post("/api/users/register", UserController.register )
    app.post("/api/users/login", UserController.login)
    app.get("/api/users/getloggedinuser", UserController.getLoggedInUser)
    app.get("/api/users/logout", UserController.logout)
}