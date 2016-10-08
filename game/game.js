'use strict';
let  crypto = require('crypto'),
     bounds_min = 32,
     x_bounds_max = 800-40,
     y_bound_max = 600-40,
     rock = [],
     shrub = [],
     cacti = [],
     day = 1,
     depression = 0;

let gulez = {
    primary: true,
    x: generateLocation(bounds_min, x_bounds_max),
    y: generateLocation(bounds_min, y_bound_max),
    map: {
        "gulez_down": [0, 0],
        "gulez_up": [1, 0],
        "gulez_left": [2, 0],
        "gulez_right": [3, 0]
    }
};

setInterval(function() {
    depression += 10;
}, 10000);

setInterval(function() {
    day += 1;
}, 3600000);

let initLevel = function(cacti_count, rock_count, shrub_count) {

    for (let ii = 0; ii < cacti_count; ii++) {
        cacti.push({x: generateLocation(bounds_min, x_bounds_max), y: generateLocation(bounds_min, y_bound_max)});
    }

    for (let ii = 0; ii < rock_count; ii++) {
        rock.push({x: generateLocation(bounds_min, x_bounds_max), y: generateLocation(bounds_min, y_bound_max)});
    }

    for (let ii = 0; ii < shrub_count; ii++) {
        shrub.push({x: generateLocation(bounds_min, x_bounds_max), y: generateLocation(bounds_min, y_bound_max)});
    }

    return {
        cacti: cacti,
        rock: rock,
        shrub: shrub,
        gulez: gulez
    };
};

function generateLocation(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setGulezPos(pos) {
    gulez.x = pos.x;
    gulez.y = pos.y;
    gulez.direction = pos.direction;
}

function getGulezPos() {
    return gulez;
}

function getDepression() {
    return depression;
}

function addToDepression(int) {
    depression += int;
    return depression;
}

function getDay() {
    return day;
}

module.exports = {
    initLevel: initLevel,
    setGulezPos: setGulezPos,
    getGulezPos: getGulezPos,
    addToDepression: addToDepression,
    getDepression: getDepression,
    getDay: getDay
};
