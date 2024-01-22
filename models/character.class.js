class Character extends MovableObject {
  ARRAY = new Arrays();
  sound = new Sounds();
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
  world; //*1
  
  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png"); //beim zugreifen auf der func der übergeordneten klasse _movableObjects_ super verwenden
    this.loadImages(this.ARRAY.IMAGES_WALKING);
    this.loadImages(this.ARRAY.IMAGES_JUMPING);
    this.loadImages(this.ARRAY.IMAGES_DEAD);
    this.loadImages(this.ARRAY.IMAGES_HURT);
    this.loadImages(this.ARRAY.IMAGES_IDLE);
    this.loadImages(this.ARRAY.IMAGES_LONG_IDLE);
    this.applyGravity();
    this.animate();
    this.sound.walking_sound_pepe.volume = 0.1;
  }

  animate() {
    setInterval(() => {
      this.sound.walking_sound_pepe.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        //&& this.x < this.world.level.level_end_x)  lvl begrenzung anch rechts   dafür lvl in world eingebunden *2
        this.moveRight();
        this.sound.walking_sound_pepe.play();
        this.world.sound.game_music.play();
        this.otherDirection = false;
        this.timeCount = 0;
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        // &&thisx 0 für begrenzung
        this.moveLeft();
        this.sound.walking_sound_pepe.play();
        this.world.sound.game_music.play();
        this.otherDirection = true;
        this.timeCount = 0;
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        this.timeCount = -2000; // ca 900 für die sprungzeit
      }

      this.world.camer_x = -this.x + 150; // +100 für position pepe

      this.timeCount += 1000 / 60;
    }, 1000 / 60);

    this.characterAnimationInterval = setInterval(() => {
      if (this.isDead()) {
        this.playAnimationOnce(this.ARRAY.IMAGES_DEAD);
      } else if (this.isHurt()) {
        this.playAnimation(this.ARRAY.IMAGES_HURT);
        this.timeCount = 0;
      } else if (this.isAboveGround()) {
        this.playAnimation(this.ARRAY.IMAGES_JUMPING);
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.ARRAY.IMAGES_WALKING);
      } else if (this.timeCount > 3000 && !this.idleAnimationPlayed) {
        this.playAnimation(this.ARRAY.IMAGES_LONG_IDLE);
      } else {
        this.playAnimation(this.ARRAY.IMAGES_IDLE);
      }
    }, 100);
  }

  jump(speedY = 30) { 
    this.speedY = speedY;
  }
  isFalling(){
    return this.speedY < 0;
  }
}
