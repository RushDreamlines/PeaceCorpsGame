'use strict';

global.env = process.argv[2];

let express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    Game = require("./game/game.js"),
    Sockets = require("./sockets/sockets.js"),
    port = 6555;

app.use(express.static(`${env}`));

Sockets.init(server, Game);

/**
  * @param cacti, rocks, shrubs amount:
**/
Sockets.setLevel(Game.initLevel(10, 18, 65));

app.get('/', function (req, res) {
    res.render(`${env}/index.html`);
});

server.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});
