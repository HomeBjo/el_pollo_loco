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

  setVolume(volume) {
    return (this.world.sound.walking_sound_pepe.volume = volume);
  }

  animate() {
    setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
    setStoppableInterval(() => this.playAnimationCharacter(), 100);
  }

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

  canMoveRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }

  moveRight() {
    super.moveRight();
    this.world.sound.walking_sound_pepe.play();
    this.world.sound.game_music.play();
    this.otherDirection = false;
    this.timeCount = 0;
  }

  canMoveLeft() {
    return this.world.keyboard.LEFT && this.x > -100;
  }

  moveLeft() {
    super.moveLeft();
    this.world.sound.walking_sound_pepe.play();
    this.world.sound.game_music.play();
    this.otherDirection = true;
    this.timeCount = 0;
  }

  canJump() {
    return this.world.keyboard.SPACE && !this.isAboveGround();
  }

  endGame() {
    this.playAnimationOnce(ARRAY.IMAGES_DEAD);
    this.world.sound.walking_sound_pepe.pause();
    resultScreen("looseScreenContainer", "loose");
    this.world.sound.game_over.play();
    stopGame();
  }

  canWalk(){
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
  }

  canWait(){
    return this.timeCount > 3000 && !this.idleAnimationPlayed
  }

  jump(speedY = 30) {
    this.speedY = speedY;
  }
  isFalling() {
    return this.speedY < 0;
  }
}
