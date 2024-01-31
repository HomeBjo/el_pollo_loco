class StatusHealthBarEndBoss extends drawableObjects {
  currentStatus_max = 100;
  currentStatus_80 = 80;
  currentStatus_60 = 60;
  currentStatus_40 = 40;
  currentStatus_low = 20;
  showEndBossHealth = false;

  percentage = 100;

  constructor() {
    super();
    this.loadImages(ARRAY.IMAGES_HEALTH_BAR_BOSS);
    this.x = 500;
    this.y = -100;
    this.width = 200;
    this.height = 60;
    this.setpercentage(100);
  }

  updateHealthBarPosition() {
    let endY = -5;
    let currentY = this.y;
    let speed = 20;

    if (currentY < endY) {
      this.y = Math.min(currentY + speed, endY);
    }
  }

  setpercentage(percentage) {
    this.percentage = percentage;
    let path = ARRAY.IMAGES_HEALTH_BAR_BOSS[this.resolveImageIndex()];
    this.img = this.imageChace[path];
  }
}
