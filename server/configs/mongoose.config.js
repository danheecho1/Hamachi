const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/Hamachi_db_2", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log("Connection to the database has been established."))
    .catch(err => console.log("ERROR WHILE ESTABLISHING CONNECTION TO THE DATABASE", err))