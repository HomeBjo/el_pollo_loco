/**
 * Class representing a movable object in the game.
 * @extends drawableObjects
 */
class MovableObject extends drawableObjects {
  currentImage2 = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  /**
   * Applies gravity to the movable object.
   */
  applyGravity() {
    setStoppableInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
      if (!this.isAboveGround()) {
        this.y = 125;
        this.speedY = 0;
      }
    }, 1000 / 25);
  }

  /**
   * Checks if the object is above the ground.
   * @returns {boolean} - True if the object is above the ground, false otherwise.
   */
  isAboveGround() {
    if (this instanceof throwableObjects) {
      return true;
    } else {
      return this.y < 125;
    }
  }

  /**
   * Checks if the object is colliding with another object.
   * @param {MovableObject} mo - The other movable object to check for collision.
   * @returns {boolean} - True if the objects are colliding, false otherwise.
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  /**
   * Handles the hit event on the object, reducing its energy.
   * @param {number} energy - The amount of energy to subtract.
   */
  hit(energy) {
    energy;
    this.energy -= energy;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }
 
  /**
   * Checks if the object is currently hurt.
   * @returns {boolean} - True if the object is hurt, false otherwise.
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    timePassed = timePassed / 1000;
    return timePassed < 0.5;
  }

  /**
   * Checks if the object is dead.
   * @returns {boolean} - True if the object is dead, false otherwise.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Moves the object to the right.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object to the left.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Plays the animation for the object using the provided images.
   * @param {Array} images - Array of image paths for the animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageChace[path];
    this.currentImage++;
  }
  
 /**
   * Plays the animation once for the object using the provided images.
   * @param {Array} images - Array of image paths for the animation.
   */
  playAnimationOnce(images) {
    if (this.currentImage2 < images.length) {
      let path = images[this.currentImage2];
      this.img = this.imageChace[path];
      this.currentImage2++;
    }
  }
}
