function Pipe() {
    this.top = random(range, h - space + 10 - range)
    this.bottom = this.top + space
    this.x = w
    this.highlight = false

    this.show = function() {
        fill('rgba(100, 100, 100, 0.5)')
        noStroke()
        rect(this.x + 10, 0, 40, this.top + 7)
        rect(this.x + 10, this.bottom + 7, 40, h - this.bottom)
        this.highlight ? fill(255, 0, 0) : fill(0, 255, 50)
        stroke(0)
        rect(this.x, 0, 40, this.top)
        rect(this.x, this.bottom, 40, h - this.bottom)
    }

    this.update = function() {
        this.x -= speed
    }

    this.hits = function(bird) {

        if ( bird.x + bird.size / 2 > this.x && bird.x - bird.size / 2 < this.x + 40 ) {

            if (    (      ( this.x - bird.x) ** 2 + (this.top - bird.y) ** 2 <= (bird.size / 2) ** 2 ) || 
                    ( ( 40 + this.x - bird.x) ** 2 + (this.top - bird.y) ** 2 <= (bird.size / 2) ** 2 ) ) {
                score -= 20
                return true
            
            } else if ( (      ( this.x - bird.x) ** 2 + (this.bottom - bird.y) ** 2 <= (bird.size / 2) ** 2 ) || 
                        ( ( 40 + this.x - bird.x) ** 2 + (this.bottom - bird.y) ** 2 <= (bird.size / 2) ** 2 ) ) {
                score -= 20
                return true
            
            } else if ( !(bird.y + bird.size / 2 >= this.top && bird.y + bird.size / 2 <= this.bottom) ) {
                score -= 20
                return true
            }

        } else return false
    }
}
