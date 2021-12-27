console.log("hello flappy");

var bird;
var h = 800
var w = 800

function setup() {
    createCanvas(w, h)
    bird = new Bird()
}

function draw() {
    background(100)
    bird.show()
    bird.update()
}

function keyPressed() {
    if (key === " ") {
        bird.flap()
    }
}