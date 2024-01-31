class Endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 60;
  x = 5170;
  offset = {
    top: 100,
    bottom: 0,
    left: 0,
    right: 0,
  };
  world;
  characterPosition = false;
  endbossDead = false;
  hadFirstContact = false;
  stopMoving = false;
  boss_sound = true;
  pepe_win_sound = true;

  constructor() {
    super().loadImage(ARRAY.IMAGES_START_BOSS[0]);
    this.loadImages(ARRAY.IMAGES_START_BOSS);
    this.loadImages(ARRAY.IMAGES_HURT_BOSS);
    this.loadImages(ARRAY.IMAGES_DEAD_BOSS);
    this.loadImages(ARRAY.IMAGES_WALK_BOSS);
    this.speed = 2.55 + Math.random() * 0.25;
    this.animate();
  }

  setVolume(volume) {
    return (this.world.sound.pepe_game_win.volume = volume);
  }

  animate() {
    setStoppableInterval(() => this.moveEndboss(i), 1000 / 60);
    let i = 0;
    setStoppableInterval(() => {
      if (this.canSeeBoss(i)) 
      this.playAnimation(ARRAY.IMAGES_START_BOSS);
      else if (this.canMoveBoss()) 
      this.playAnimation(ARRAY.IMAGES_WALK_BOSS);
      i++;
      if (this.canCharacterSeeBoss()) {
        i = 0;
        this.hadFirstContact = true; }
      if (this.hitEndBoss()) 
      this.playAnimation(ARRAY.IMAGES_HURT_BOSS);
      if (this.isDead()) 
      this.endGameWin();
    }, 200);
  }

  moveEndboss(i) {
    if (this.canMove(i)) {
      this.moveLeft();
    }
  }

  canMove(i) {
    return (
      !this.endbossDead && this.hadFirstContact && i > 8 && !this.stopMoving
    );
  }

  canSeeBoss(i) {
    return i < 8 && !this.endbossDead;
  }
  canMoveBoss() {
    return !this.endbossDead && !this.stopMoving;
  }

  canCharacterSeeBoss() {
    return this.characterPosition && !this.hadFirstContact;
  }

  hitEndBoss() {
    return this.isHurt() && !this.endbossDead;
  }

  endGameWin() {
    this.playAnimationOnce(ARRAY.IMAGES_DEAD_BOSS);
    this.world.sound.walking_sound_pepe.pause();
    resultScreen("winScreenContainer", "win");
    stopGame();
    this.endbossDead = true;
    if (this.pepe_win_sound) {
      this.world.sound.pepe_game_win.play();
      this.pepe_win_sound = false;
    }
  }
}
