var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var AuthorModel = Schema.AuthorModel
var ReminderModel = Schema.ReminderModel

var bob = new AuthorModel({name: "bob"});
var susy = new AuthorModel({name: "charlie"});
var tom = new AuthorModel({name: "tom"});


var reminder1 = new ReminderModel({body: "reminder1!!"});
var reminder2 = new ReminderModel({body: "reminder2!!"});
var reminder3 = new ReminderModel({body: "reminder3!!"});
var reminder4 = new ReminderModel({body: "reminder4!!"});
var reminder5 = new ReminderModel({body: "reminder5!!"});
var reminder6 = new ReminderModel({body: "reminder6!!"});

var authors = [bob, susy, tom];
var reminders = [reminder1, reminder2, reminder3, reminder4, reminder5, reminder6];

authors.forEach(function(author, i){
  author.reminders.push(reminders[i], reminders[i+3])
  author.save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("An author was saved!");
    }
  })
});
