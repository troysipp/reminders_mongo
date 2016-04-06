var Schema = require("../db/schema.js");
var AuthorModel = Schema.AuthorModel
var ReminderModel = Schema.ReminderModel


var authorsController = {
  index: function(){
    AuthorModel.find({}, function(err, docs){
      console.log(docs);
    });
  },
  show: function(req){
    AuthorModel.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
    });
  }
};

authorsController.index();
authorsController.show({name: "bob"});
