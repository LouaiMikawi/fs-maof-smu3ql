/* 
var snake = new Snake();
snake.draw();
*/
var Snake = function () {
    this.segments = [
        new Block(7, 5),
        new Block(6, 5),
        new Block(5, 5)
    ];

    this.direction = "right";
    this.nextDirection = "right";
};

Snake.prototype.draw = function () {
    this.segments.forEach(   (segment) => segment.drawSquare("Blue") )
    // for (var i = 0; i < this.segments.length; i++) {
    //     this.segments[i].drawSquare("Blue");
    // }
};