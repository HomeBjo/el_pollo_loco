class Character extends MovableObject {
  ARRAY = new Arrays();
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

 

  IMAGES_JUMPING = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_DEAD = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  IMAGES_IDLE = [
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_LONG_IDLE = [
    "img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img/2_character_pepe/1_idle/long_idle/I-16.png",
    "img/2_character_pepe/1_idle/long_idle/I-17.png",
    "img/2_character_pepe/1_idle/long_idle/I-18.png",
    "img/2_character_pepe/1_idle/long_idle/I-19.png",
    "img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  world; //*1
  walking_sound_pepe = new Audio("audio/walking_pepe.mp3");

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png"); //beim zugreifen auf der func der übergeordneten klasse _movableObjects_ super verwenden
    this.loadImages(this.ARRAY.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.applyGravity();
    this.animate();
    this.walking_sound_pepe.volume = 0.1;
  }

  animate() {
    setInterval(() => {
      this.walking_sound_pepe.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        //&& this.x < this.world.level.level_end_x)  lvl begrenzung anch rechts   dafür lvl in world eingebunden *2
        this.moveRight();
        this.walking_sound_pepe.play();
        this.world.sound.game_music.play();
        this.otherDirection = false;
        this.timeCount = 0;
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        // &&thisx 0 für begrenzung
        this.moveLeft();
        this.walking_sound_pepe.play();
        this.world.sound.game_music.play();
        this.otherDirection = true;
        this.timeCount = 0;
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        this.timeCount = -1000; // ca 900 für die sprungzeit
      }

      this.world.camer_x = -this.x + 150; // +100 für position pepe

      this.timeCount += 1000 / 60;
    }, 1000 / 60);

    this.characterAnimationInterval = setInterval(() => {
      if (this.isDead()) {
        this.playAnimationOnce(this.IMAGES_DEAD);
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        this.timeCount = 0;
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.ARRAY.IMAGES_WALKING);
      } else if (this.timeCount > 3000 && !this.idleAnimationPlayed) {
        this.playAnimation(this.IMAGES_LONG_IDLE);
      } else {
        this.playAnimation(this.IMAGES_IDLE);
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
