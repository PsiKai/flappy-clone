console.log("hello flappy");

var bird;
var pipes = []
var h = 800
var w = 800
var windResistance = 0.9
var gravity = 0.8
var interval = 80
var speed = 5
var space = 200
var range = 150

function setup() {
    createCanvas(w, h)
    bird = new Bird()
    pipes.push(new Pipe())
}

function draw() {
    if (frameCount % interval === 0) {
        pipes.push(new Pipe())
    }
    background(100)
    bird.show()
    bird.update()
    for (i = pipes.length - 1; i >= 0; i--) {
        pipes[i].highlight = pipes[i].hits(bird)
        if (pipes[i].x <= -40) pipes.splice(i, 1)
        pipes[i].update()
        pipes[i].show()
    }
}

function keyPressed() {
    if (key === " ") {
        bird.flap()
    }
}