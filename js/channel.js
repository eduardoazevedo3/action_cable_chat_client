(function() {

  App.chatChannel = App.cable.subscriptions.create({ channel: "ChatChannel", chat_id: "YOUR-CHAT-ID" }, {

    received: function(data) {
      $("#chat").append(`<div class="message">${data['message']}</div>`)
      return data['message'];
    },

    speak: function(message) {
      return this.perform('speak', { message: message });
    }

  });

}).call(this);
