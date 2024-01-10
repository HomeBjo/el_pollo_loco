class throwableObjects extends MovableObject {
    //  offset = {
    //     top:3,
    //     bottom:3,
    //     left:3,
    //     right:3,
    // }
    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        
        this.x=x;
        this.y=y;
        this.otherDirection = otherDirection;
        this.height =60;
        this.width =50;
    
        this.trow()


}

 trow() {
        this.speedY = 30;
        this.applyGravity();

        setInterval(() => {
            if (!this.otherDirection) {
                this.x += 10;
            } else {
                this.x -= 10;
            }
        }, 25);
    }
}