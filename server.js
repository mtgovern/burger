// Node dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Open Server
var PORT = process.env.PORT || 5000

var app = express();
// Static content for app from "public" directory in app directory
app.use(express.static('public'));

// Parse app
app.use(bodyParser.urlencoded({ extended: false}));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');
app.use('/', router);

app.listen(PORT, function() {
    console.log("App listenting on PORT " + PORT);
});