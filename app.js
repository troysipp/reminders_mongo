var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
require("./db/schema")
mongoose.connect('mongodb://localhost/reminders')
var app = express()
app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

var ReminderModel = mongoose.model('Reminder')
var AuthorModel = mongoose.model("Author")

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/reminders", function(req, res){
  ReminderModel.find({}, function(err, docs){
    console.log(docs)
    res.render("reminders/index", {reminders: docs});

  })
});

app.get("/authors", function(req, res){
  AuthorModel.find({}, function(err, docs){
    res.render("authors/index", {authors: docs});

  })
});
