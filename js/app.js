$(function() {

  $("#btn-send-message").click(function(){
    var messageSent = App.chatChannel.speak($("#message").val());

    if (messageSent){
      $("#message").val("");
    } else {
      alert("Message sending failed");
    }
  });

});
