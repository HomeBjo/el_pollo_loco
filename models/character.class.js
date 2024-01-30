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
  world; //*1
  
  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png"); //beim zugreifen auf der func der übergeordneten klasse _movableObjects_ super verwenden
    this.loadImages(ARRAY.IMAGES_WALKING);
    this.loadImages(ARRAY.IMAGES_JUMPING);
    this.loadImages(ARRAY.IMAGES_DEAD);
    this.loadImages(ARRAY.IMAGES_HURT);
    this.loadImages(ARRAY.IMAGES_IDLE);
    this.loadImages(ARRAY.IMAGES_LONG_IDLE);
    this.applyGravity();
    this.animate();
   
  }

  setVolume(volume){
    return this.world.sound.walking_sound_pepe.volume = volume;  // testen ob noch brauch 
  }

  animate() {
    setStoppableInterval(() => {
      this.world.sound.walking_sound_pepe.pause();
     
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        //&& this.x < this.world.level.level_end_x)  lvl begrenzung anch rechts   dafür lvl in world eingebunden *2
        this.moveRight();
        this.world.sound.walking_sound_pepe.play();
        this.world.sound.game_music.play();
        this.otherDirection = false;
        this.timeCount = 0;
      }

      if (this.world.keyboard.LEFT && this.x > -100) {
        // &&thisx 0 für begrenzung
        this.moveLeft();
        this.world.sound.walking_sound_pepe.play();
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

    this.characterAnimationInterval = setStoppableInterval(() => {
      if (this.isDead()) {
        this.playAnimationOnce(ARRAY.IMAGES_DEAD);
        this.world.sound.walking_sound_pepe.pause();
        resultScreen('looseScreenContainer','loose')
        this.world.sound.game_over.play();
        stopGame();
      } else if (this.isHurt()) {
        this.playAnimation(ARRAY.IMAGES_HURT);
        this.timeCount = 0;
      } else if (this.isAboveGround()) {
        this.playAnimation(ARRAY.IMAGES_JUMPING);
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(ARRAY.IMAGES_WALKING);
      } else if (this.timeCount > 3000 && !this.idleAnimationPlayed) {
        this.playAnimation(ARRAY.IMAGES_LONG_IDLE);
      } else {
        this.playAnimation(ARRAY.IMAGES_IDLE);
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
