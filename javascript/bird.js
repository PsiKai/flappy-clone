function Bird() {
    this.y = height / 2;
    this.x = 80;
    this.size = 40
    this.gravity = 0.7
    this.velocity = 0
    this.lift = -18

    this.show = function() {
        fill(255, 0, 0)
        ellipse(this.x, this.y, this.size);
    }

    this.update = function() {
        this.velocity += this.gravity
        this.velocity *= 0.9
        this.y += this.velocity;
        if (this.y >= height) this.y = height
        if (this.y <= 0) this.y = 0;
    }

    this.flap = function() {
        this.velocity += this.lift
    }
}