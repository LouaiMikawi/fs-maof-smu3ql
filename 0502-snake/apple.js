/*
var apple = new Apple();
apple.draw();
 
var apple = new Apple();
apple.move();
apple.draw(); 


        var circle = function (x, y, radius, fillCircle) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2, false);
            if (fillCircle) {
                ctx.fill();
            } else {
                ctx.stroke();
            }
        };





*/





var Apple = function () {
    this.position = new Block(10, 10);
};

Apple.prototype.draw = function () {
    this.position.drawCircle("LimeGreen");
};

Apple.prototype.move = function () {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
};