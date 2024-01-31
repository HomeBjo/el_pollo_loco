class throwableObjects extends MovableObject {
  IMAGES = ["img/6_salsa_bottle/salsa_bottle.png"];

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

  spalshBottle() {
    setStoppableInterval(() => {
      this.playAnimationOnce(ARRAY.IMAGES_SPLASH);
    }, 100);
  }
}
