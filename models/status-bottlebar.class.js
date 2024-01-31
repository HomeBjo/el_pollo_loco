/**
 * Class representing the status bottle bar in the game.
 * @extends drawableObjects
 */
class StatusBottleBar extends drawableObjects {
  currentStatus_max = 18;
  currentStatus_80 = 15;
  currentStatus_60 = 12;
  currentStatus_40 = 6;
  currentStatus_low = 1;

  percentage = 100;

  /**
   * Creates a StatusBottleBar instance.
   */
  constructor() {
    super();
    this.loadImages(ARRAY.IMAGES_BOTTLE_BAR);
    this.x = 5;
    this.y = 33;
    this.width = 200;
    this.height = 60;
    this.setpercentage(0);
  }

  /**
   * Sets the percentage of the status bottle bar and updates the displayed image.
   * @param {number} percentage - The percentage value to set.
   */
  setpercentage(percentage) {
    this.percentage = percentage;
    let path = ARRAY.IMAGES_BOTTLE_BAR[this.resolveImageIndex()];
    this.img = this.imageChace[path];
  }
}
