'use strict';

let messages = [];

let addMessage =function(username, message) {
    if (messages.length === 30) {
        messages.shift();
    }

    message = username ? username + ": " + message : "anon: " + message;

    messages.push(message);
};

module.exports = {
    getMessages: function() {
        return messages;
    },
    addMessage: addMessage
};
