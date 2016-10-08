let level,
    currentPlayer;

function Sockets() {
    return {
        init: function startSocketListeners() {
            socket.emit('getLevel');

            socket.on('currentLevel', function(res) {
                level = res;
                View()._updateAssets(res);
            });

            socket.on('updatePos', function(res) {
                Position()._updatePosition(View()._getPrimaryAsset(), res);
            });

            socket.on('currentPlayer', function(res) {
                currentPlayer = res;
                Position(View()._getPrimaryAsset())._init();
            });

            socket.on('currentPlayerName', function(res) {
                $('#currentPlayer').text("Current Player: " + res);
            });

            socket.on('depression', function(res) {
                $('#depression').text("Depression Level: " + res);
            });

            socket.on('currentDay', function(res) {
                $('#currentDay').text("Day " + res);
            });

            socket.on('messages', function(res) {
                $('#messages').html(res.join('<br>'));
                $('#messages').scrollTop($('#messages').height());
            });
        },
        sendPos: function sendPos(assetView, direction) {
            socket.emit('pos', {x: assetView.x, y: assetView.y, direction: direction});
        },
        _currentPlayer: function() {
            return currentPlayer;
        },
        setUsername: function() {
            if ($('#usernameInput')[0] && $('#usernameInput')[0].value.length > 0 && $('#usernameInput')[0].value.length < 20) {
                socket.emit('setUsername', $('#usernameInput')[0].value);
                $('#usernameInput').hide();
                $('#submitUsername').hide();
            } else {
                if ($('#usernameInput')[0].value.length > 20) {
                    alert('No. Make it shorter.');
                } else {
                    alert('Enter something in or these annoying alerts will keep poping up. I obvious give two craps about user experience.');
                }
            }
        },
        reflect: function() {
            socket.emit("reflect");
        },
        sendMessage: function() {
            if ($('#chat-message')[0] && $('#chat-message')[0].value.trim().length > 0 && $('#chat-message')[0].value.length < 101) {
                socket.emit("message", $('#chat-message')[0].value);
                $('#chat-message')[0].value = "";
            }
        }
    };
}
