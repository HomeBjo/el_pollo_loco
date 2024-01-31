/**
 * Class representing the status health bar for the end boss in the game.
 * @extends drawableObjects
 */
class StatusHealthBarEndBoss extends drawableObjects {
  currentStatus_max = 100;
  currentStatus_80 = 80;
  currentStatus_60 = 60;
  currentStatus_40 = 40;
  currentStatus_low = 20;
  showEndBossHealth = false;
  percentage = 100;

  /**
   * Creates a StatusHealthBarEndBoss instance.
   */
  constructor() {
    super();
    this.loadImages(ARRAY.IMAGES_HEALTH_BAR_BOSS);
    this.x = 500;
    this.y = -100;
    this.width = 200;
    this.height = 60;
    this.setpercentage(100);
  }

  /**
   * Updates the position of the health bar to be displayed at the top.
   */
  updateHealthBarPosition() {
    let endY = -5;
    let currentY = this.y;
    let speed = 20;

    if (currentY < endY) {
      this.y = Math.min(currentY + speed, endY);
    }
  }

  /**
   * Sets the percentage of the status health bar for the end boss and updates the displayed image.
   * @param {number} percentage - The percentage value to set.
   */
  setpercentage(percentage) {
    this.percentage = percentage;
    let path = ARRAY.IMAGES_HEALTH_BAR_BOSS[this.resolveImageIndex()];
    this.img = this.imageChace[path];
  }
}
