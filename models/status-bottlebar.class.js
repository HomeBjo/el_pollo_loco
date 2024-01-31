class StatusBottleBar extends drawableObjects {
  currentStatus_max = 4;
  currentStatus_80 = 3;
  currentStatus_60 = 2;
  currentStatus_40 = 1;
  currentStatus_low = 1;

  percentage = 100;

  constructor() {
    super();
    this.loadImages(ARRAY.IMAGES_BOTTLE_BAR);
    this.x = 5;
    this.y = 33;
    this.width = 200;
    this.height = 60;
    this.setpercentage(0);
  }

  setpercentage(percentage) {
    this.percentage = percentage;
    let path = ARRAY.IMAGES_BOTTLE_BAR[this.resolveImageIndex()];
    this.img = this.imageChace[path];
  }
}
