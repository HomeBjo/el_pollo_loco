class Cloud extends MovableObject {
  y = 40;
  width = 200;
  height = 200;
  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    this.x = 200 + Math.random() * 500;
    this.animate();
  }

  animate() {
    setStoppableInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
