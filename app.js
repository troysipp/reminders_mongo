var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var authorsController = require("./controllers/authorsController")
require("./db/schema")
mongoose.connect('mongodb://localhost/reminders')
var app = express()
app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))


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

app.post("/authors/:id/reminders", function(req,res){
  AuthorModel.findById(req.params.id, function(err, docs){
    docs.reminders.push(new ReminderModel({body: req.body.body}))
    docs.save(function(err){
      if(!err){
        res.redirect("/authors/" + req.params.id)
      }
    })
  })
})

app.get("/authors/:authorId/reminders/:id/delete", function(req,res){
  AuthorModel.findByIdAndUpdate(req.params.authorId, {
    $pull:{
      reminders: {_id: req.params.id}
    }
  }, function(err, docs){
    if(!err){
      res.redirect("/authors/" + req.params.authorId)
    }
  })
})
