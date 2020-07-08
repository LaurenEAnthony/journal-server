require('dotenv').config();
var express = require('express');
var app = express();
let sequelize = require('./db')

let journal = require('./controllers/journalcontroller');

let user = require('./controllers/usercontroller');

sequelize.sync();
// sequelize.sync({force: true})   

app.use(express.json());

app.use('/journal', journal);
app.use('/user', user);


// app.use("/test", function (req, res) {
//     res.send("This is a test route")
// })
// //create an endpoint called about-me
// //response = "My name is ____ and my age is ____"
// app.use("/about-me", function (req, res) {
//     res.send("My name is Lauren and I am 32 years old.")
// })
// Have endpoint of journal/practice
// send a response from that endpoint (this is a practice route)
// app.use('/journal', require('./controllers/journalcontroller'));

app.listen(3000, function () {
    console.log("app is listening on port 3000");
});

