// filename : index.js
// import express
let express = require("express");

// import body parser
let bodyParser = require('body-parser');

// import mongoose
let mongoose = require('mongoose');

// initialize app
let app = express();

// import routes
let apiRoutes = require("./api-routes");

// configuration body-parser
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

// setup server
var port = process.env.PORT || 8080;

// send message for default URL
app.get('/', (req, res) => res.send("Hello World With express and Nodemon 1"));

// app apiRoutes
app.use('/api', apiRoutes);

// launch app to listen specified PORT
app.listen(port, function() {
	console.log("Morning Resthub on port " + port);
})