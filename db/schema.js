// requiring mongoose dependency
var mongoose = require('mongoose')

// instantiate a name space for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

// defining schema for reminders
var ReminderSchema = new Schema({
  body: String
})

// defining schema for authors.
var AuthorSchema = new Schema({
  name: String,
  reminders: [ReminderSchema]
})

// setting models in mongoose utilizing schemas defined above
var AuthorModel = mongoose.model("Author", AuthorSchema)
var ReminderModel = mongoose.model("Reminder", ReminderSchema)
