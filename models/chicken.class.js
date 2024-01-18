class Chicken extends MovableObject {
  width = 80;
  height = 80;
  x = 70;
  y = 340;
  offset = {
    top: 1,
    bottom: 1,
    left: 1,
    right: 1,
  };
  isDead = false;

  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  IMAGES_DIE = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];
  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DIE);
    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.isDead) {
        this.moveLeft();
      }
    }, 1000 / 60);

    setInterval(() => {
      if (!this.isDead) {
        this.playAnimation(this.IMAGES_WALKING); // video 16  funktioins merhmals da auf eine funktion verkleinern also auslagern und übergeben bilder *3
      }
    }, 200);
  }

  die() {
    this.isDead = true;
    this.playAnimation(this.IMAGES_DIE);
    this.offset = {
        top: 200,
        bottom: 0,
        left: 0,
        right: 0,
    };
}
}