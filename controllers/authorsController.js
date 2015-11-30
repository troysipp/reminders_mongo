var AuthorModel = require("../models/author")
var ReminderModel = require("../models/reminder")

var authorsController = {
  index: function(req, res){
    AuthorModel.find({}, function(err, authors){
      res.json(authors);
    })
  },
  create: function(req, res){
    new AuthorModel({name: req.body.name}).save(function(err, author){
      res.json(author);
    })
  },
  show: function(req, res){
    AuthorModel.findById(req.params.id, function(err, author){
      res.json(author);
    })
  },
  update: function(req,res){
    AuthorModel.findById(req.params.id, function(err, author){
      author.name = req.body.name;
      author.save(function(err, author){
        res.json(author);
      })
    })
  },
  delete: function(req, res){
    AuthorModel.remove({_id: req.params.id}, function(err){
      res.json({success: true});
    })
  },
  addReminder: function(req, res){
    AuthorModel.findById(req.params.id, function(err, author){
      var reminder = new ReminderModel({body: req.body.body});
      author.reminders.push(reminder)
      author.save(function(err, reminder){
        res.json(reminder);
      })
    })
  },
  removeReminder: function(req, res){
    AuthorModel.findByIdAndUpdate(req.params.authorId, {
      $pull:{
        reminders: {_id: req.params.id}
      }
    }, function(err, author){
      res.json(author);
    });
  }
}

module.exports = authorsController;
