var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var authorsController = require("./controllers/authorsController")
mongoose.connect('mongodb://localhost/reminders')
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/", function(req, res){
  res.sendFile("index.html");
});
app.get("/authors", authorsController.index)
app.post("/authors", authorsController.create)
app.get("/authors/:id", authorsController.show)
app.put("/authors/:id", authorsController.update)
app.delete("/authors/:id", authorsController.delete)
app.post("/authors/:id/reminders", authorsController.addReminder)
app.delete("/authors/:authorId/reminders/:id", authorsController.removeReminder)
