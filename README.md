# Action Cable - Chat Client

This project is a simple client to consume a WebSocket using Action Cable based on the Rails API with JWT Authentication.

I assume that you already have a project with Action Cable set up and are trying to test its operation with an external client.

## Setup

First, you must configure the connection with the Action Cable, for that, you need the URL and the TOKEN to access your WebSocket with Action Cable. I imagine you already have that.

This data must be informed in the file `js/connection.js`

```javascript
var token = "YOUR-TOKEN-HERE";
App.cable = ActionCable.createConsumer(`wss://YOUR-CABLE-DOMAIN-HERE/cable?token=${token}`);
```

Next, you must configure the connection between that client and your channel on Action Cable

These settings must be made in the file `js/channet.js`

```javascript
App.chatChannel = App.cable.subscriptions.create({ channel: "ChatChannel", chat_id: "YOUR-CHAT-ID" }, {

  received: function(data) {
    $("#chat").append(`<div class="message">${data['message']}</div>`)
    return data['message'];
  },

  speak: function(message) {
    return this.perform('speak', { message: message });
  }

});
```

In the channel we used to create this client had the subscribed and speak methods, you must adjust it according to your WebSocket with Action Cable.

## Contributing

If you think this could be better, your help is welcome through pull requests.
