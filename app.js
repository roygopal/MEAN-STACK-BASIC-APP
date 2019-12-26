var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port = process.env.PORT || 8080; 				// set the port
var database = require('./config/database'); 			// load the database config

var morgan = require('morgan'); 		// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
//var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration ===============================================================
mongoose.connect(database.url, (err, db) => {
    if (err) {
        console.log("error connecting");
    }
    else {
        console.log("connected", db);
    }

}); 	// connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/client/users')); 				// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json

// routes ======================================================================
let user = require('./server/services/users/user');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/users', user.createUsers);
app.get('/users', user.getUser);
app.delete('/users/:email', user.deleteUser);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
