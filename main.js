var sqDim = 40;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);

canvas.addEventListener('touchmove', function(e) {
    for (var i = 0; i < e.touches.length; i++) {
        var touch = e.touches[i];

        var px = touch.pageX;
        var py = touch.pageY;

        ctx.beginPath();

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(px, py, sqDim, sqDim);
        ctx.fill();
        ctx.lineWidth = 5.0;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
}, false);

canvas.addEventListener('touchmove', function(e) {
    for (var i = 0; i < e.touches.length; i++) {
        var touch = e.touches[i];

        var px = touch.pageX;
        var py = touch.pageY;

        ctx.beginPath();
        ctx.arc(px, py, 30, 0, 2 * Math.PI, true);

        ctx.fillStyle = "#b9c7d3";
        ctx.fill();
        ctx.lineWidth = 2.0;
        ctx.strokeStyle = "#099aaa";
        ctx.stroke();
    }
});
canvas.addEventListener('touchend', function () {
    ctx.clearRect(0, 0, 320, 450);
}, false);

