var express = require("express")
var mongoose = require('mongoose')
require("./db/schema")
mongoose.connect('mongodb://localhost/reminders')
var app = express()

var ReminderModel = mongoose.model('Reminder')
var AuthorModel = mongoose.model("Author")

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/reminders", function(req, res){
  ReminderModel.find({}, function(err, docs){
    res.send(docs);

  })
});

app.get("/authors", function(req, res){
  AuthorModel.find({}, function(err, docs){
    res.send(docs);

  })
});
