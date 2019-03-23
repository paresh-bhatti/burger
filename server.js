var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var path = require("path");

require('dotenv').config()
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/config/config.json")[env];

var app = express();
// app.use(express.static(process.cwd() + '/public'));
app.use(express.static(path.join(__dirname, "assets")));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);

var PORT = process.env.PORT || 8001;

app.listen(PORT, function() {
    console.log(`Hello World we are listening on ${PORT}`);
});