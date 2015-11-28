var mongoose = require('mongoose')

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
