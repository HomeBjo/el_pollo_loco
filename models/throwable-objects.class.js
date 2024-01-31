/**
 * Class representing throwable objects in the game, extending the MovableObject class.
 * @extends MovableObject
 */
class throwableObjects extends MovableObject {
  IMAGES = ["img/6_salsa_bottle/salsa_bottle.png"];

  /**
   * Creates a throwableObjects instance.
   * @param {number} x - The x-coordinate of the throwable object.
   * @param {number} y - The y-coordinate of the throwable object.
   * @param {boolean} otherDirection - A flag indicating the direction of the throwable object.
   */

  constructor(x, y, otherDirection) {
    super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(ARRAY.IMAGES_SPLASH);
    this.x = x;
    this.y = y;
    this.otherDirection = otherDirection;
    this.height = 60;
    this.width = 50;
    this.trow();
  }

  /**
   * Throws the throwable object and applies gravity.
   */
  trow() {
    this.speedY = 30;
    this.applyGravity();

    setStoppableInterval(() => {
      if (!this.otherDirection) {
        this.x += 10;
      } else {
        this.x -= 10;
      }
    }, 25);
  }

  /**
   * Plays the splash animation for the throwable object.
   */
  spalshBottle() {
    setStoppableInterval(() => {
      this.playAnimationOnce(ARRAY.IMAGES_SPLASH);
    }, 100);
  }
}
