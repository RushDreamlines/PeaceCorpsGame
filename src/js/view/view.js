let width, height, view, assetsView, primaryAsset;

function View(width, height) {

    if (width && height) {
        this.width = width;
        this.height = height;
    }

    return {
        _getPrimaryAsset: function() {
            return primaryAsset;
        },
        _view: function() {
            return view;
        },
        _render: function renderView() {
            view = Crafty.init(width, height, document.getElementById('game'));

            view.background('#EEEEEE');
            view.z = 0;

            var square = Crafty.e('2D, Canvas, Color');

            square.attr({
                w: width,
                h: height
            })
            .color('#c09a6b')
            .origin('center');

            return Promise.resolve(true);
        },
        _updateAssets: function(res) {
            let assets = res;
            let asset_keys = Object.keys(res);
            asset_keys.forEach(function(asset) {
                if (res[asset].primary) {
                    Sprites(asset, res[asset].map).addSprite()
                    .then(function() {
                        Position()._currentDirection();
                    })
                    .then(function(pos) {
                        if (!pos) {
                            let direction_keys = Object.keys(assets[asset].map);
                            let assetsView = Crafty.e('2D, DOM, ' + direction_keys[0] + ", SpriteAnimation")
                                .attr({x: assets[asset].x, y: assets[asset].y});

                            assetsView.primarySprite = direction_keys[0];

                            Position(assetsView)._init(direction_keys[0]);

                            assetsView
                            .reel("walking_down", 1000, [
                                [0,0], [1,0], [2,0], [3,0]
                            ])
                            .reel("walking_left", 1000, [
                                [0,2], [1,2], [2,2], [3,2]
                            ])
                            .reel("walking_right", 1000, [
                                [0,3], [1,3], [2,3], [3,3]
                            ])
                            .reel("walking_up", 1000, [
                                [0,1], [1,1], [2,1], [3,1]
                            ])
                            .animate((res[asset].direction ? "walking_" + res[asset].direction : "walking_down"), -1);

                            assetsView.z = 3;

                            primaryAsset = assetsView;
                        }
                    });
                } else {
                    res[asset].forEach(function(location) {
                        let assetsView = Crafty.e('2D, DOM, ' + asset)
                            .attr({x: location.x, y: location.y});
                        asset === 'cacti' ? assetsView.z = 2 : assetsView.z = 1;
                    });
                }
            });
        }
    };
}
