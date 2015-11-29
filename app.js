var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
// var methodOverride = require('method-override')
var authorsController = require("./controllers/authorsController")
require("./db/schema")
mongoose.connect('mongodb://localhost/reminders')
var app = express()
app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// app.use(methodOverride('_method'))


var ReminderModel = mongoose.model('Reminder')
var AuthorModel = mongoose.model("Author")

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/authors", authorsController.index)
app.get("/authors/new", authorsController.new)
app.post("/authors", authorsController.create)
app.get("/authors/:id", authorsController.show)
app.get("/authors/:id/edit", authorsController.edit)
app.post("/authors/:id", authorsController.update)
app.get("/authors/:id/delete", authorsController.delete)
app.post("/authors/:id/reminders", authorsController.addReminder)
app.get("/authors/:authorId/reminders/:id/delete", authorsController.removeReminder)
