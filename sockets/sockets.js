'use strict';

const Messages = require('../messages/messages.js');

let io,
    users = [],
    currentLevel = {},
    currentPlayer,
    Game;

let init = function(server, _Game) {
    io = require("socket.io")(server);
    Game = _Game;
    startListeners();
};

function startListeners() {
    io.on('connection', function(socket) {
        socket.on('getLevel', function() {
            users.push(socket);

            if (!currentPlayer) {
                currentPlayer = socket.id;
                socket.emit('currentPlayer', true);
            };

            socket.emit('currentLevel', getLevel());
            socket.emit("depression", Game.getDepression());
            socket.emit("currentDay", Game.getDay());
            socket.emit("messages", Messages.getMessages());
        });

        socket.on('pos', function(pos) {
            if (socket.id === currentPlayer) {
                Game.setGulezPos(pos);
                io.emit('updatePos', pos);
            }
        });

        socket.on('setUsername', function(username) {
            socket.username = username;

            if (currentPlayer === socket.id) {
                io.emit('currentPlayerName', username);
            }
        });

        socket.on('reflect', function(int) {
            if (currentPlayer === socket.id) {
                io.emit("depression", Game.addToDepression(5));
            }
        });

        socket.on('message', function(msg) {
            Messages.addMessage(socket.username, msg);
            io.emit("messages", Messages.getMessages());
        });

        socket.on('disconnect', function() {
            users.forEach(function(user, index) {
                if (user.id === socket.id) {
                    users.splice(index, 1);
                }
            });

            if (currentPlayer === socket.id) {
                if (users.length > 0) {
                    currentPlayer = users[0].id;
                    users[0].emit('currentPlayer', true);
                    io.emit('newPlayer');
                } else {
                    currentPlayer = undefined;
                }
            };
        });
    });
}

let setLevel = function(level) {
    currentLevel = level;
};

let getLevel = function() {
    currentLevel.gulez = Game.getGulezPos();
    return currentLevel;
};

let depression;
setInterval(function() {
    if (depression === Game.getDepression()) {
        setTimeout(function() {
            depression = Game.getDepression();
            io.emit('currentDay', depression);
        }, 1000);
    } else {
        depression = Game.getDepression();
        io.emit('depression', Game.getDepression());
    }
}, 10000);

let currentDay;
setInterval(function() {
    if (currentDay === Game.getDay()) {
        setTimeout(function() {
            currentDay = Game.getDay();
            io.emit('currentDay', currentDay);
        }, 1000);
    } else {
        currentDay = Game.getDay();
        io.emit('currentDay', Game.getDay());
    }
}, 30000);

module.exports = {
    init: init,
    setLevel: setLevel,
    getLevel: getLevel
};
