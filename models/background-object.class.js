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
    if (characterX !== this.previousCharacterX) {
      if (characterX > 60) {
        this.x -= otherDirection ? -this.speed : this.speed;
      }

      this.previousCharacterX = characterX;
    }
  }
}
