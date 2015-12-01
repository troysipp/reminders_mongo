var AuthorModel = require("../models/author")
var ReminderModel = require("../models/reminder")

var authorsController = {
  index: function(req, res){
    AuthorModel.find({}, function(err, docs){
      res.render("authors/index", {authors: docs})
    })
  },
  show: function(req, res){
    var id = req.params.id;
    AuthorModel.findById(id, function(err, doc){
      res.render("authors/show", {author: doc})
    })
  }
}

module.exports = authorsController;
