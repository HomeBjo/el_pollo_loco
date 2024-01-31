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

  /**
   * Constructor for the Endboss class.
   */
  constructor() {
    super().loadImage(ARRAY.IMAGES_START_BOSS[0]);
    this.loadImages(ARRAY.IMAGES_START_BOSS);
    this.loadImages(ARRAY.IMAGES_HURT_BOSS);
    this.loadImages(ARRAY.IMAGES_DEAD_BOSS);
    this.loadImages(ARRAY.IMAGES_WALK_BOSS);
    this.speed = 2.55 + Math.random() * 0.25;
    this.animate();
  }

  /**
   * Sets the volume of the pepe_game_win sound.
   * @param {number} volume - The volume level.
   */
  setVolume(volume) {
    return (this.world.sound.pepe_game_win.volume = volume);
  }

  /**
   * Animates the Endboss by moving and playing different animations based on conditions.
   */
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

  /**
   * Moves the Endboss to the left during the animation.
   * @param {number} i - The animation frame index.
   */
  moveEndboss(i) {
    if (this.canMove(i)) {
      this.moveLeft();
    }
  }

  /**
   * Checks if the Endboss can move during the animation.
   * @param {number} i - The animation frame index.
   * @returns {boolean} - True if the Endboss can move, false otherwise.
   */
  canMove(i) {
    return (
      !this.endbossDead && this.hadFirstContact && i > 8 && !this.stopMoving
    );
  }

  /**
   * Checks if the Endboss is in the initial "see" state during the animation.
   * @param {number} i - The animation frame index.
   * @returns {boolean} - True if the Endboss is in the "see" state, false otherwise.
   */
  canSeeBoss(i) {
    return i < 8 && !this.endbossDead;
  }

  /**
   * Checks if the Endboss can move during the animation.
   * @returns {boolean} - True if the Endboss can move, false otherwise.
   */
  canMoveBoss() {
    return !this.endbossDead && !this.stopMoving;
  }

  /**
   * Checks if the character can see the Endboss during the animation.
   * @returns {boolean} - True if the character can see the Endboss, false otherwise.
   */
  canCharacterSeeBoss() {
    return this.characterPosition && !this.hadFirstContact;
  }

  /**
   * Checks if the Endboss is hit during the animation.
   * @returns {boolean} - True if the Endboss is hit, false otherwise.
   */
  hitEndBoss() {
    return this.isHurt() && !this.endbossDead;
  }

  /**
   * Ends the game in a win state when the Endboss is dead.
   */
  endGameWin() {
    this.playAnimationOnce(ARRAY.IMAGES_DEAD_BOSS);
    resultScreen("winScreenContainer", "win");
    stopGame();
    this.endbossDead = true;
    if (this.pepe_win_sound) {
      this.world.sound.pepe_game_win.play();
      this.pepe_win_sound = false;
     this.world.sound.walking_sound_pepe.pause();
    }
  }
}
