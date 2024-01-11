class BackgroundObject extends MovableObject {
    speed;
    width = 720;
    height = 480;

    constructor(imagePath, x, speed) {
        super().loadImage(imagePath);
        this.x = x;
        this.speed = speed;
        this.y = 480 - this.height;
    }

    //  moveWithParallax(characterX, otherDirection) {
    //     // Überprüfe, ob der Charakter in der horizontalen Richtung bewegt wurde
    //     if (characterX !== this.previousCharacterX) {
    //         // Richtung berücksichtigen
    //         this.x -= otherDirection ? -this.speed : this.speed;
    //     }

    //     // Speichere den aktuellen x-Wert des Charakters für den nächsten Vergleich
    //     this.previousCharacterX = characterX;
    // }
}