console.log("hello flappy");

var body = document.querySelector("body")
var bird;
var pipes = []
var h = getHeight()
var w = getWidth()
console.log(w, h);
var windResistance = 0.9
var gravity = 0.8
var interval = 80
var speed = 5
var space = 200
var range = 150
var score = 0
var scoreBoard = document.getElementById("score")

function getHeight() {
    var height = parseFloat(window.getComputedStyle(body).height)
    console.log(height);
    if (height < 800) {
        return height
    }
    return 800
}

function getWidth() {
    var width = parseFloat(window.getComputedStyle(body).width)
    console.log(width);
    if (width < 900) {
        return width
    }
    return 800
}

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