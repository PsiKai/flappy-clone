function Pipe() {
    this.top = random(10, h - 110)
    this.bottom = this.top + 100
    this.x = w

    this.show = function() {
        fill(255)
        rect(this.x, 0, 40, this.top)
        rect(this.x, this.bottom, 40, h - this.bottom)
    }

    this.update = function() {
        this.x -= speed
    }
}