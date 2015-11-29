var AuthorModel = require("../models/author")

var authorsController = {
  index: function(req, res){
    AuthorModel.find({}, function(err, docs){
      res.render("authors/index", {authors: docs})
    })
  },
  new: function(req, res){
    res.render("authors/new")
  },
  create: function(req, res){
    var author = new AuthorModel({name: req.body.name})
    author.save(function(err){
      if (!err){
        res.redirect("authors")
      }
    })
  },
  show: function(req, res){
    AuthorModel.findById(req.params.id, function(err, docs){
      res.render("authors/show", docs)
    })

  },
  edit: function(req,res){
    AuthorModel.findById(req.params.id, function(err, docs){
      res.render("authors/edit", docs)
    })
  },
  update: function(req,res){
    AuthorModel.findById(req.params.id, function(err, docs){
      docs.name = req.body.name
      docs.save(function(err){
        if(!err){
          res.redirect("/authors/" + req.params.id)
        }
      })
    })
  },
  delete: function(req, res){
    AuthorModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.redirect("/authors")
      }
    })
  }
}

module.exports = authorsController;
