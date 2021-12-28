function Bird() {
    this.y = height / 2;
    this.x = 80;
    this.size = 40
    this.velocity = 0
    this.lift = -20

    this.show = function() {
        fill('rgba(100, 100, 100, 0.5)')
        noStroke()
        ellipse(this.x + 3, this.y + 5, this.size)
        fill(255, 200, 0)
        stroke(0)
        ellipse(this.x, this.y, this.size);
    }

    this.update = function() {
        this.velocity += gravity
        this.velocity *= windResistance
        this.y += this.velocity;
        if (this.y + this.size / 2 >= height) this.y = height - this.size / 2
        if (this.y - this.size / 2 <= 0) this.y = 0 + this.size / 2;
    }

    this.flap = function() {
        this.velocity += this.lift
    }
}
