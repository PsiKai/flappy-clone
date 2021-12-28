function Pipe() {
    this.top = random(range, h - space + 10 - range)
    this.bottom = this.top + space
    this.x = w
    this.highlight = false

    this.show = function() {
        this.highlight ? fill(255, 0, 0) : fill(0, 255, 50)
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
