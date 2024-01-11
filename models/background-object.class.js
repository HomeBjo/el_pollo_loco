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
        // prüfen ob der charackter bewegt wird 
        if (characterX !== this.previousCharacterX) {
            // bei links ode rechts - oder +
            if (characterX > 50) {   // auseinander reisen verhindert
            this.x -= otherDirection ? -this.speed : this.speed;
        }

        // aktuellen x-Wert des Charakters 
        this.previousCharacterX = characterX;
    }
}}