console.log("hello flappy");

var bird;
var pipes = []
var h = 800
var w = 800
var windResistance = 0.9
var interval = 80
var speed = 5

function setup() {
    createCanvas(w, h)
    bird = new Bird()
}

function draw() {
    if (frameCount % interval === 0) {
        console.log("new pipe");
        pipes.push(new Pipe())
    }
    background(100)
    bird.show()
    bird.update()
    for (i = pipes.length - 1; i >= 0; i--) {
        if (pipes.x <= 0) pipes.splice(i, 1)
        pipes[i].update()
        pipes[i].show()
    }
}

function keyPressed() {
    if (key === " ") {
        bird.flap()
    }
}