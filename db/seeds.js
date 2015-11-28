var mongoose = require('mongoose')
require('./schema')
mongoose.connect('mongodb://localhost/reminders')
var AuthorModel = mongoose.model("Author")
var ReminderModel = mongoose.model("Reminder")

var bob = new AuthorModel({name: "bob"})
var charlie = new AuthorModel({name: "charlie"})
var tom = new AuthorModel({name: "tom"})

var authors = [bob, charlie, tom]
for(var i = 0; i < authors.length; i++){
  authors[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("author was saved")
    }
  })
}

var reminder1 = new ReminderModel({body: "reminder1!!", author: bob})
var reminder2 = new ReminderModel({body: "reminder2!!", author: charlie})
var reminder3 = new ReminderModel({body: "reminder3!!", author: charlie})

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
