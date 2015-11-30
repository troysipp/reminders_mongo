var AuthorView = function(author){
  this.author = author;
  console.dir(author)
  this.$el = $("<div class='author'></div>");
}
AuthorView.prototype = {
  render: function(){
    var self = this;
    var author = self.author;
    self.$el.html(self.template());
    author.reminders.forEach(function(reminder){
      var reminderView = new ReminderView(reminder);
      self.$el.append(reminderView.render());
    });
    $("#container").append(self.$el);
  },
  template:  function(){
    var html = $("<div class='authorName'>");
    var author = this.author;
    html.append("<a href='/authors/"+author._id+"'>"+author.name+"</a>");
    return html;
  }
}
