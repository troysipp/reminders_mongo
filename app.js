var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
require("./db/schema")
mongoose.connect('mongodb://localhost/reminders')
var app = express()
app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))


var ReminderModel = mongoose.model('Reminder')
var AuthorModel = mongoose.model("Author")

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/reminders", function(req, res){
  ReminderModel.find({}, function(err, docs){
    console.log(docs)
    res.render("reminders/index", {reminders: docs});

  })
});

app.get("/authors", function(req, res){
  AuthorModel.find({}, function(err, docs){
    res.render("authors/index", {authors: docs});

  })
});

app.get("/authors/new", function(req,res){
  res.render("authors/new")
})

app.post("/authors", function(req, res){
  var author = new AuthorModel({name: req.body.name})
  author.save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("author was saved")
      res.redirect("authors")
    }
  })
})

app.get("/authors/:id", function(req,res){
  AuthorModel.findById(req.params.id, function(err, docs){
    res.render("authors/show", docs)
  })

})

app.get("/authors/:id/edit", function(req, res){
  AuthorModel.findById(req.params.id, function(err, docs){
    res.render("authors/edit", docs)
  })
})

app.post("/authors/:id", function(req, res){
  console.log("updating")
  AuthorModel.findById(req.params.id, function(err, docs){
    docs.name = req.body.name
    docs.save(function(err){
      if(!err){
        res.redirect("/authors/" + req.params.id)
      }
    })
  })
})

app.get("/authors/:id/delete", function(req, res){
  AuthorModel.remove({_id: req.params.id}, function(err){
    if(!err){
      res.redirect("/authors")
    }
  })
})

app.post("/authors/:id/reminders", function(req,res){
  AuthorModel.findById(req.params.id, function(err, docs){
    docs.reminders.push(new ReminderModel({body: req.body.body}))
    docs.save(function(err){
      if(!err){
        res.redirect("/authors/" + req.params.id)
      }
    })
  })
})
