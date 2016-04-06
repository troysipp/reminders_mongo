var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/reminders');

var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});

db.once('open', function() {
  console.log("Connected to MongoDB!");

});

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var ReminderSchema = new Schema({
  body: String
});

var AuthorSchema = new Schema({
  name: String,
  reminders: [ReminderSchema]
});

var AuthorModel = mongoose.model("Author", AuthorSchema);
var ReminderModel = mongoose.model("Reminder", ReminderSchema);
