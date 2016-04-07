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
  }
};

authorsController.update({name: "tom"}, {name: "Sarah"});
