class Bottles extends MovableObject {
  width = 65;
  height = 65;
  x = 90;
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

  constructor(x) {
    super();
    if (Math.random() < 0.5) {
      this.loadImage(this.IMAGES[0]);
    } else {
      this.loadImage(this.IMAGES[1]);
    }
    this.x= x
    this.x = x + Math.random() * 1000;
  }
}
