/**
 * Represents a bottle object that can be thrown by the character.
 * @extends MovableObject
 */
class Bottles extends MovableObject {
  width = 65;
  height = 65;
  y = 350;
  offset = {
    top: 1,
    bottom: 1,
    left: 15,
    right: 15,
  };

  IMAGES = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  /**
   * Creates an instance of Bottles.
   * @param {number} x - The initial X position of the bottle object.
   */
  constructor(x) {
    super();
    if (Math.random() < 0.5) {
      this.loadImage(this.IMAGES[0]);
    } else {
      this.loadImage(this.IMAGES[1]);
    }
    this.x = x + Math.random() * 400;
  }
}
