class BackgroundObject extends MovableObject {
    speed;
    width = 720;
    height = 480;
    previousCharacterX = 0;
    constructor(imagePath, x, speed) {
        super().loadImage(imagePath);
        this.x = x;
        this.speed = speed;
        this.y = 480 - this.height;
    }

     moveWithParallax(characterX, otherDirection) {
        // ob der char sich bewegt 
        if (characterX !== this.previousCharacterX) {
            // bei links ode rechts - oder +
            if (characterX > 60) {   // auseinander reisen verhindert beim start
            this.x -= otherDirection ? -this.speed : this.speed;
        }

        // aktuellen x-Wert des Charakters 
        this.previousCharacterX = characterX;
    }
}}