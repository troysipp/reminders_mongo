var Author = function(info){
  this.name = info.name;
  this._id = info._id;
  this.reminders = info.reminders;
}
Author.fetch = function(){
  var url = "http://localhost:4000/authors";
  var request = $.getJSON(url).then(function(response){
    var authors = [];
    for(var i = 0; i < response.length; i++){
      authors.push(new Author(response[i]));
    }
    return authors;
  }).fail(function(response){
    console.log("Authors fetch fail.");
  });
  return request;
}
