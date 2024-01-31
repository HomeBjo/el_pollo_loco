class Coins extends MovableObject {
  width = 65;
  height = 65;
  x = 90;
  y = 90;
  offset = {
    top: 4,
    bottom: 1,
    left: 10,
    right: 10,
  };
  isDead = false;

  IMAGES = ["img/7_statusbars/3_icons/icon_coin.png"];

  constructor() {
    super().loadImage("img/7_statusbars/3_icons/icon_coin.png");
    this.setRandomPosition();
  }

  setRandomPosition() {
    const minX = 100;
    const maxX = 700;
    const minY = 10;
    const maxY = 100;

    this.x = Math.random() * (maxX - minX) + minX;
    this.y = Math.random() * (maxY - minY) + minY;
  }
}
