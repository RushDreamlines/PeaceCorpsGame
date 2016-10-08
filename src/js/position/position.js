let currentDirection,
    moving = [],
    directions = {
        40: "down",
        37: "left",
        39: "right",
        38: "up"
    };

function Position(assetView) {

    function movePrimary(assetView, e) {
        currentDirection = directions[e.key];

        if (assetView.x < 0 || assetView.y < 0 || assetView.x > 770 || assetView.y > 560) {
            return;
        }

        if (e.key === Crafty.keys.LEFT_ARROW) {
            if (assetView.x - 5 < 0) {
                assetView.x = 0;
                return;
            }

            assetView.x -= 5;
        } else if (e.key === Crafty.keys.RIGHT_ARROW) {
            if (assetView.x + 5 > 770) {
                assetView.x = 770;
                return;
            }

            assetView.x += 5;
        } else if (e.key === Crafty.keys.UP_ARROW) {
            if (assetView.y - 5 < 0) {
                assetView.y = 0;
                return;
            }

            assetView.y -= 5;
        } else if (e.key === Crafty.keys.DOWN_ARROW) {
            if (assetView.y + 5 > 560) {
                assetView.y = 560;
                return;
            }

            assetView.y += 5;
        };
    }

    return {
        _init: function(direction) {
            currentDirection = direction;

            if (!Sockets()._currentPlayer()) {
                if (!assetView) return;

                assetView.unbind('KeyUp');
                assetView.unbind('KeyDown');
                return;
            }

            assetView
            .bind('KeyUp', function(e) {
                if (e.key === Crafty.keys.LEFT_ARROW || e.key === Crafty.keys.RIGHT_ARROW || e.key === Crafty.keys.UP_ARROW || e.key === Crafty.keys.DOWN_ARROW) {
                    moving.forEach(function(e) {
                        clearInterval(e);
                    });
                }
            })
            .bind('KeyDown', function(e) {
                if (e.key === 81) {
                    Sockets().reflect();
                    return;
                }

                if (e.key === Crafty.keys.LEFT_ARROW || e.key === Crafty.keys.RIGHT_ARROW || e.key === Crafty.keys.UP_ARROW || e.key === Crafty.keys.DOWN_ARROW) {
                    Sprites().setSpriteDirection(assetView, directions[e.key]);

                    movePrimary(assetView, e);
                    Sockets().sendPos(assetView, directions[e.key]);

                    moving.push(setInterval(function() {
                        movePrimary(assetView, e);
                        Sockets().sendPos(assetView, directions[e.key]);
                    }, 150));
                }
            });
        },
        _updatePosition: function(assetView, pos) {

            if (currentDirection !== pos.direction) {
                Sprites().setSpriteDirection(assetView, pos.direction);
                currentDirection = pos.direction;
            }

            assetView.x = pos.x;
            assetView.y = pos.y;
        },
        _currentDirection: function() {
            return currentDirection;
        }
    };
}
