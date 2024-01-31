class Cloud extends MovableObject {
  y = -8;
  width = 500;
  height = 400;

  /**
   * Constructs a Cloud object with the specified initial x-coordinate.
   * @param {number} x - The initial x-coordinate of the cloud.
   */
  constructor(x) {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    this.x = x + Math.random() * 10;
    this.y += Math.random() * 0.3 - 0.1;
    this.animate();
  }

  /**
   * Animates the cloud's movement.
   */
  animate() {
    setStoppableInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
