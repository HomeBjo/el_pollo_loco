class StatusCoinBar extends drawableObjects {
  currentStatus_max = 20;
  currentStatus_80 = 15;
  currentStatus_60 = 12;
  currentStatus_40 = 6;
  currentStatus_low = 1;

  percentage = 100;

  constructor() {
    super();
    this.loadImages(ARRAY.IMAGES_COIN_BAR);
    this.x = 5;
    this.y = 80;
    this.width = 200;
    this.height = 60;
    this.setpercentage(0);
  }

  setpercentage(percentage) {
    this.percentage = percentage;
    let path = ARRAY.IMAGES_COIN_BAR[this.resolveImageIndex()];
    this.img = this.imageChace[path];
  }
}
