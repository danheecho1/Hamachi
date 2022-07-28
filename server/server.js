const express = require("express")
const cors = require("cors")

require('dotenv').config(); //so that we can read the information about our secret key which is stored in the .env file
const cookieParser = require('cookie-parser'); //so that the server can understand the cookie information coming in from the client (browser)

const app = express()
const port = 8000

require("./configs/mongoose.config") // this line will work once mongoose.config.js is set up.

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

require('./routes/User.routes')(app)
require('./routes/Transfer.routes')(app)
require('./routes/Group.routes')(app)
require('./routes/Expense.routes')(app)
require('./routes/Person.routes')(app)

app.listen(8000, () => console.log("listening on port 8000"))