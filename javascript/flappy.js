var bird;
var pipes = []

var h = getHeight()
var w = getWidth()

var windResistance = 0.9
var gravity = 0.8

// Game Difficulty Settings
var interval = 80  // smaller number = more pipes on screen
var speed = 7  // larger number = faster pipes
var space = 200  // smaller number = smaller opening in pipes
var range = 150  // smaller number = wider pipe opening positions

var score = 0
var scoreBoard = document.getElementById("score")

function setup() {
    createCanvas(w, h)
    bird = new Bird()
    pipes.push(new Pipe())
}

function draw() {
    if (frameCount % interval === 0) {
        pipes.push(new Pipe())
    }
    background(135, 206, 235)
    bird.show()
    bird.update()
    for (i = pipes.length - 1; i >= 0; i--) {
        pipes[i].highlight = pipes[i].hits(bird)
        if (pipes[i].x <= -40) pipes.splice(i, 1)
        pipes[i].update()
        pipes[i].show()
    }
    score++
    if (frameCount % 20 === 0) scoreBoard.innerHTML = score
}

function keyPressed() {
    if (key === " ") {
        bird.flap()
    }
}

function mousePressed() {
    bird.flap()
}
