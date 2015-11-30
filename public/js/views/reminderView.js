var ReminderView = function(reminder){
  this.reminder = reminder;
  this.$el = $("<p class='reminder'></p>");
}
ReminderView.prototype = {
  render: function(){
    var reminder = this.reminder;
    return this.$el.html(reminder.body);
  }
}
