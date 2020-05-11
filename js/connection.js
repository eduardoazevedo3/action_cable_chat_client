(function() {

  this.App || (this.App = {});

  var token = "YOUR-TOKEN-HERE";
  App.cable = ActionCable.createConsumer(`wss://YOUR-CABLE-DOMAIN-HERE/cable?token=${token}`);

}).call(this);
