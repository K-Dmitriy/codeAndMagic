'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderTracery = function (ctx, x, y) {
    var STEP_TRACERY_X = 20;
    var STEP_TRACERY_Y = 20;
    var HEIGHT_TRACERY_X = 20;
    var HEIGHT_TRACERY_Y = 20;

    var GAP_TRACERY_X = 20;
    var GAP_TRACERY_Y = 20;

    var startTraceryX = x + GAP_TRACERY_X;
    var startTraceryY = y + GAP_TRACERY_Y;

    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

    for (var indexCloudWidthTop = 0; indexCloudWidthTop < Math.ceil((CLOUD_WIDTH - 2 * GAP_TRACERY_X) / STEP_TRACERY_X); indexCloudWidthTop++) {
        a = indexCloudWidthTop + 1;
        b = indexCloudWidthTop + 2;
        ctx.bezierCurveTo(startTraceryX + indexCloudWidthTop * STEP_TRACERY_X, startTraceryY, startTraceryX + a * STEP_TRACERY_X, startTraceryY - HEIGHT_TRACERY_Y, startTraceryX + b * STEP_TRACERY_X, startTraceryY);
        indexCloudWidthTop++;
    }

    c = b;
    a = 0;
    b = 0;

    for (var indexCloudHeightRight = 0; indexCloudHeightRight < Math.ceil((CLOUD_HEIGHT - 2 * GAP_TRACERY_Y) / STEP_TRACERY_Y); indexCloudHeightRight++) {
        a = indexCloudHeightRight + 1;
        b = indexCloudHeightRight + 2;
        ctx.bezierCurveTo(startTraceryX + c * STEP_TRACERY_X, startTraceryY + indexCloudHeightRight * STEP_TRACERY_Y, startTraceryX + c * STEP_TRACERY_X + HEIGHT_TRACERY_X, startTraceryY + a * STEP_TRACERY_Y, startTraceryX + c * STEP_TRACERY_X, startTraceryY + b * STEP_TRACERY_Y);
        indexCloudHeightRight++;
    }

    d = b;
    a = 0;
    b = 0;
    for (var indexCloudWidthBottom = 0; indexCloudWidthBottom < Math.ceil((CLOUD_WIDTH - 2 * GAP_TRACERY_X) / STEP_TRACERY_X); indexCloudWidthBottom++) {
        a = indexCloudWidthBottom + 1;
        b = indexCloudWidthBottom + 2;
        ctx.bezierCurveTo(startTraceryX + c * STEP_TRACERY_X - indexCloudWidthBottom * STEP_TRACERY_X, startTraceryY + d * STEP_TRACERY_Y, startTraceryX + c * STEP_TRACERY_X - a * STEP_TRACERY_X, startTraceryY + d * STEP_TRACERY_Y + HEIGHT_TRACERY_Y, startTraceryX + c * STEP_TRACERY_X - b * STEP_TRACERY_X, startTraceryY + d * STEP_TRACERY_Y);
        indexCloudWidthBottom++;
    }

    a = 0;
    b = 0;

    for (var indexCloudHeightLeft = 0; indexCloudHeightLeft < Math.ceil((CLOUD_HEIGHT - 2 * GAP_TRACERY_Y) / STEP_TRACERY_Y); indexCloudHeightLeft++) {
        a = indexCloudHeightLeft + 1;
        b = indexCloudHeightLeft + 2;
        ctx.bezierCurveTo(startTraceryX, startTraceryY + d * STEP_TRACERY_Y - indexCloudHeightLeft * STEP_TRACERY_Y, startTraceryX - HEIGHT_TRACERY_X, startTraceryY + d * STEP_TRACERY_Y - a * STEP_TRACERY_Y, startTraceryX, startTraceryY + d * STEP_TRACERY_Y - b * STEP_TRACERY_Y);
        indexCloudHeightLeft++;
    }
};

var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    // ctx.strokeStyle = 'blue';
    ctx.beginPath();
    // ctx.moveTo(startTraceryX, startTraceryY);
    renderTracery(ctx, x, y);
    ctx.closePath();
    // ctx.stroke();
    ctx.fill();
};

var getMaxElement = function (arr) {
    if (!arr.length) {
        return alert('Никто не прошел игру!');
    }

    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
    if (players.length !== times.length) {
        if (players.length > times.length) {
            players.length = times.length;
        } else {
            times.length = players.length;
        }
    }

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
       ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
       ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, barWidth * times[i] / maxTime, BAR_HEIGHT);
    }
};
