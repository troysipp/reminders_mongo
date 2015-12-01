var express = require('express'); // express dependency for our application
var app = express();

app.set("view engine", "hbs"); // sets view engine to handlebars
app.use(express.static(__dirname + '/public')); // connects assets like stylesheets

var mongoose = require('mongoose'); // loads mongoose dependency
mongoose.connect('mongodb://localhost/reminders'); // connect mongoose interfaces to reminders mongo db

var bodyParser = require('body-parser'); // loads dependency for middleware for paramters
app.use(bodyParser.json()); // allows for parameters in JSON and html
app.use(bodyParser.urlencoded({extended:true}));

var methodOverride = require('method-override'); // loads dependency that allows put and delete where not supported in html
app.use(methodOverride('_method')); // allows for put/delete request in html form

var authorsController = require("./controllers/authorsController"); // loads module containing all authors contrller actions. not defined yet...

// app server located on port 4000
app.listen(4000, function(){
  console.log("app listening on port 4000");
});

// routes
app.get("/authors", authorsController.index);
app.get("/authors/:id", authorsController.show);
