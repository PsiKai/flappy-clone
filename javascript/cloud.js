function Cloud() {
    this.x = width / 2 * (i + 1)
    this.y = 75 * (i + 1)

    this.show = function() {
        noStroke()
        fill('rgba(100, 100, 100, 0.7)')
        ellipse(this.x + 3, this.y + 2, 100)
        ellipse(this.x - 47, this.y + 12, 80)
        ellipse(this.x + 53, this.y + 17, 70)
        fill(255)
        ellipse(this.x, this.y, 100)
        ellipse(this.x - 50, this.y + 10, 80)
        ellipse(this.x + 50, this.y + 15, 70)
    }

    this.update = function() {
        this.x -= speed * 0.3
        if (this.x + 80 < 0) this.x = width + 100
    }
}