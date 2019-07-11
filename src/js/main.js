var socket = io.connect('http://localhost:6555');
socket.emit('connected', { my: 'data' });

$(document).ready(function() {
    Sprites().loadSprites()
    .then(function(res) {
        return new View(800, 600)._render();

    })
    .then(function() {
        Sockets().init();
    })
    .catch(function(err) {
        console.log(err);
    });
});
