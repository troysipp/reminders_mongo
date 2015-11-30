$(document).ready(function(){
  Author.fetch().then(function(authors){
    authors.forEach(function(author){
      var view = new AuthorView(author);
      view.render();
    });
  });
});
