var express = require("express")
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/reminders')
var app = express()

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var AuthorSchema = new Schema({
  name: String
})

var ReminderSchema = new Schema({
  body: String,
  author: AuthorSchema
})

var AuthorModel = mongoose.model("Author", AuthorSchema)
var ReminderModel = mongoose.model("Reminder", ReminderSchema)

var reminder1 = new ReminderModel({body: "reminder1!!", author: {name: "author1"}})
var reminder2 = new ReminderModel({body: "reminder2!!", author: {name: "author2"}})
var reminder3 = new ReminderModel({body: "reminder3!!", author: {name: "author3"}})

var reminders = [reminder1, reminder2, reminder3]

for(var i = 0; i < reminders.length; i++){
  reminders[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("reminder was saved")
    }
  })
}

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/", function(req, res){
  ReminderModel.find({}, function(err, docs){
    res.send(docs);

  })
});
