var Schema = require("../db/schema.js");
var AuthorModel = Schema.AuthorModel
var ReminderModel = Schema.ReminderModel


var authorsController = {
  index: function(){
    AuthorModel.find({}, function(err, docs){
      console.log(docs);
      return docs
    });
  },
  show: function(req){
    AuthorModel.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
      return docs;
    });
  },
  update: function(req, update){
    AuthorModel.findOneAndUpdate(req, update, {new: true}, function(err, docs){
      if(err){
        console.log(err)
      }
      else{
        console.log(docs);
      }
    });
  },
  destroy: function(req){
    AuthorModel.findOneAndRemove(req, function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  },
  destroyAll: function(req){
    AuthorModel.find({}, function(err, docs){
      if(err){
        console.log(err)
      }
      else{
        docs.forEach(function(author){
          if(author.name === req.name){
            author.remove().then(function(results){
              console.log(results);
            })
          }
        });
      }
    });
  },
  removeReminder: function(req, project){
    AuthorModel.findOneAndUpdate(req, {
      $pull: { reminders: {body: project.body} }
    },
    {new: true}, function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  }
};

  authorsController.removeReminder({name: "bob"}, {body: "reminder4!!"});
