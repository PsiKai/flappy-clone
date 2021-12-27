function Pipe() {
    this.top = random(10, h - space + 10)
    this.bottom = this.top + space
    this.x = w
    this.highlight = false

    this.show = function() {
        this.highlight ? fill(255, 0, 0) : fill(255)
        rect(this.x, 0, 40, this.top)
        rect(this.x, this.bottom, 40, h - this.bottom)
    }

    this.update = function() {
        this.x -= speed
    }

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > this.bottom) {
            if (bird.x > this.x && bird.x < this.x + 40) {
                return true
            }
            else return false
        }
    }
}