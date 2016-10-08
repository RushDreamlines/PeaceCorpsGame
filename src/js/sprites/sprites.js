let sprites = ["cacti", "rock", "shrub"];
let previousAnimation;
//
//TODO load cache
//
function Sprites(sprite, map) {
    let loadSprites = function(sprite, map) {
        let spriteMap = {
            "sprites": {}
        };

        sprites.forEach(function(spriteName) {
            let path = "/assets/" + spriteName + ".png";

            spriteMap["sprites"][path] = {
                tile: 36,
                tileh: 36,
                paddingX: -4,
                map: {}
            };

            if (spriteName === sprite && map) {
                spriteMap["sprites"][path]["map"] = map;
            } else {
                spriteMap["sprites"][path]["map"][spriteName] = [0, 0];
            }
        });

        return new Promise(function(resolve, reject) {
            return Crafty.load(spriteMap, function onLoad(res) {
                return resolve(true);
            }, null, function onError(res) {
                return reject(false);
            });
        });
    };

    let getSprites = function() {
        return sprites;
    };

    let addSprite = function() {
        if (sprite && sprites.indexOf(sprite) === -1) {
            sprites.push(sprite);
             return loadSprites(sprite, map);
        }

        return Promise.reject();
    };

    let setSpriteDirection = function(assetView, directions) {
        previousAnimation = directions;

        assetView
        .animate("walking_" + directions, -1);
    };

    return {
        getSprites: getSprites,
        loadSprites: loadSprites,
        setSpriteDirection: setSpriteDirection,
        addSprite: addSprite
    };
}
