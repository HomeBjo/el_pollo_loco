/**
 * Represents a background object that moves with parallax effect.
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {
  speed;
  width = 720;
  height = 480;
  previousCharacterX = 0;

  /**
   * Creates an instance of BackgroundObject.
   * @param {string} imagePath - The file path to the image of the background object.
   * @param {number} x - The initial X position of the background object.
   * @param {number} speed - The speed at which the background object moves.
   */
  constructor(imagePath, x, speed) {
    super().loadImage(imagePath);
    this.x = x;
    this.speed = speed;
    this.y = 480 - this.height;
  }

  /**
   * Moves the background object with parallax effect based on the character's movement.
   * @param {number} characterX - The current X position of the character.
   * @param {boolean} otherDirection - Indicates whether the character is facing the opposite direction.
   */
  moveWithParallax(characterX, otherDirection) {
    if (characterX !== this.previousCharacterX) {
      if (characterX > 60) {
        this.x -= otherDirection ? -this.speed : this.speed;
      }

      this.previousCharacterX = characterX;
    }
  }
}
