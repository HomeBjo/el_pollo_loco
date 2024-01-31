class StatusHealthBar extends drawableObjects {
  currentStatus_max = 100;
  currentStatus_80 = 80;
  currentStatus_60 = 60;
  currentStatus_40 = 40;
  currentStatus_low = 20;

  percentage = 100;

  constructor() {
    super();
    this.loadImages(ARRAY.IMAGES_HEALTH_BAR_PEPE);
    this.x = 5;
    this.y = -15;
    this.width = 200;
    this.height = 60;
    this.setpercentage(100);
  }

  setpercentage(percentage) {
    this.percentage = percentage;
    let path = ARRAY.IMAGES_HEALTH_BAR_PEPE[this.resolveImageIndex()];
    this.img = this.imageChace[path];
  }
}
