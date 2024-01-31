/**
 * Represents the main character of the game.
 * @extends MovableObject
 */
class Character extends MovableObject {
  width = 110;
  height = 300;
  speed = 7;
  y = 130;
  x = 70;
  timeCount = 0;
  idleAnimationPlayed = false;
  offset = {
    top: 100,
    bottom: 10,
    left: 20,
    right: 20,
  };
  world;

   /**
   * Creates an instance of Character.
   */
  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(ARRAY.IMAGES_WALKING);
    this.loadImages(ARRAY.IMAGES_JUMPING);
    this.loadImages(ARRAY.IMAGES_DEAD);
    this.loadImages(ARRAY.IMAGES_HURT);
    this.loadImages(ARRAY.IMAGES_IDLE);
    this.loadImages(ARRAY.IMAGES_LONG_IDLE);
    this.applyGravity();
    this.animate();
  }

   /**
   * Sets the volume for the character's walking sound.
   * @param {number} volume - The volume level.
   * @returns {number} - The updated volume level.
   */
  setVolume(volume) {
    return (this.world.sound.walking_sound_pepe.volume = volume);
  }

  /**
   * Initiates continuous character movement and animation.
   */
  animate() {
    setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
    setStoppableInterval(() => this.playAnimationCharacter(), 100);
  }

  /**
   * Moves the character based on keyboard input and updates camera position.
   */
  moveCharacter() {
    this.world.sound.walking_sound_pepe.pause();
    if (this.canMoveRight())
      this.moveRight();
    if (this.canMoveLeft())
      this.moveLeft();
    if (this.canJump()) {
      this.jump();
      this.timeCount = -2000;
    }
    this.world.camer_x = -this.x + 150;
    this.timeCount += 1000 / 60;
  }

  /**
   * Plays the appropriate character animation based on the current state.
   */
  playAnimationCharacter() {
    if (this.isDead()) 
      this.endGame(); 
    else if (this.isHurt()) {
      this.playAnimation(ARRAY.IMAGES_HURT);
      this.timeCount = 0;
    } else if (this.isAboveGround()) 
      this.playAnimation(ARRAY.IMAGES_JUMPING);
     else if (this.canWalk()) 
      this.playAnimation(ARRAY.IMAGES_WALKING);
     else if (this.canWait()) 
      this.playAnimation(ARRAY.IMAGES_LONG_IDLE);
     else 
      this.playAnimation(ARRAY.IMAGES_IDLE);
  }

  /**
   * Checks if the character can move to the right.
   * @returns {boolean} - True if the character can move to the right, otherwise false.
   */
  canMoveRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }

  /**
   * Moves the character to the right, plays walking sound, and updates direction.
   */
  moveRight() {
    super.moveRight();
    this.world.sound.walking_sound_pepe.play();
    this.world.sound.game_music.play();
    this.otherDirection = false;
    this.timeCount = 0;
  }

  /**
   * Checks if the character can move to the left.
   * @returns {boolean} - True if the character can move to the left, otherwise false.
   */
  canMoveLeft() {
    return this.world.keyboard.LEFT && this.x > -100;
  }

  /**
   * Moves the character to the left, plays walking sound, and updates direction.
   */
  moveLeft() {
    super.moveLeft();
    this.world.sound.walking_sound_pepe.play();
    this.world.sound.game_music.play();
    this.otherDirection = true;
    this.timeCount = 0;
  }

  /**
   * Checks if the character can perform a jump.
   * @returns {boolean} - True if the character can jump, otherwise false.
   */
  canJump() {
    return this.world.keyboard.SPACE && !this.isAboveGround();
  }

  /**
   * Ends the game by playing the dead animation, displaying the result screen, and stopping the game.
   */
  endGame() {
    this.playAnimationOnce(ARRAY.IMAGES_DEAD);
    this.world.sound.walking_sound_pepe.pause();
    resultScreen("looseScreenContainer", "loose");
    this.world.sound.game_over.play();
    stopGame();
  }

  /**
   * Checks if the character can walk (move left or right).
   * @returns {boolean} - True if the character can walk, otherwise false.
   */
  canWalk(){
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
  }

  /**
   * Checks if the character can wait (stand idle for a certain duration).
   * @returns {boolean} - True if the character can wait, otherwise false.
   */
  canWait(){
    return this.timeCount > 3000 && !this.idleAnimationPlayed
  }

  /**
   * Makes the character perform a jump with the specified vertical speed.
   * @param {number} speedY - The vertical speed of the jump.
   */
  jump(speedY = 30) {
    this.speedY = speedY;
  }
  
  /**
   * Checks if the character is currently falling.
   * @returns {boolean} - True if the character is falling, otherwise false.
   */
  isFalling() {
    return this.speedY < 0;
  }
}
