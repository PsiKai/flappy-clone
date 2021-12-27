function Bird() {
    this.y = height / 2;
    this.x = 80;
    this.size = 40
    this.velocity = 0
    this.lift = -20

    this.show = function() {
        fill(255, 0, 0)
        ellipse(this.x, this.y, this.size);
    }

    this.update = function() {
        this.velocity += gravity
        this.velocity *= windResistance
        this.y += this.velocity;
        if (this.y >= height) this.y = height
        if (this.y <= 0) this.y = 0;
    }

    this.flap = function() {
        this.velocity += this.lift
    }
}