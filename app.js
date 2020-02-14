var express  = require('express');
var mongoose = require('mongoose'); // mongoose for mongodb
var database = require('./config/database'); // load the database config
const open = require('open');
var morgan = require('morgan');
var bodyParser = require('body-parser'); // pull information from HTTP POST (express4)

var app      = express(); // create our app w/ express
var port = process.env.PORT || 8080; // set the port

// Connect to MongoDB
mongoose
    .connect(database.url, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(express.static(__dirname + '/client/users'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());

// routes ======================================================================
let user = require('./server/services/users/user');

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/client/users/index.html');
});
app.post('/users', user.createUsers);
app.get('/users', user.getUser);
app.delete('/users/:email', user.deleteUser);

// listen (start app with node app.js) ======================================
app.listen(port, () => console.log(`Server started on port ${port}`));
const url = `http://localhost:${port}/`;
open(url, {app: 'google chrome'}); // open a new tab in chrome on start of server
