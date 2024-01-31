class Coins extends MovableObject {
  width = 65;
  height = 65;
  x = 90;
  y = 10;
  offset = {
    top: 4,
    bottom: 1,
    left: 10,
    right: 10,
  };
  isDead = false;

  IMAGES = ["img/7_statusbars/3_icons/icon_coin.png"];

  /**
   * Constructs a Coins object with the specified initial x-coordinate.
   * @param {number} x - The initial x-coordinate of the coins.
   */
  constructor(x) {
    super().loadImage("img/7_statusbars/3_icons/icon_coin.png");
    this.x=x
    this.y += Math.random() *  300;
  }
}
