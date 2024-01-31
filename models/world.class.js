/**
 * The World class represents the game world where the game takes place.
 */
class World {
  character = new Character();
  level = level1;
  sound = new Sounds();
  canvas;
  ctx;
  keyboard;
  camer_x = 0;
  StatusHealthBar = new StatusHealthBar();
  StatusBottleBar = new StatusBottleBar();
  StatusCoinBar = new StatusCoinBar();
  throwableObjectsClass = new throwableObjects();
  StatusHealthBarEndBoss = new StatusHealthBarEndBoss();
  throwableObjects = [];
  thrownBottles = 0;
  thrownCoins = 0;
  intro_endboss_played = false;
  characterPosition = false;
  throwCount = 0;
  endboss_win = false;

  /**
   * Creates a new instance of the World.
   * @param {HTMLCanvasElement} canvas - The canvas element on which the world is drawn.
   * @param {Object} keyboard - The keyboard control for the game.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  /**
   * Initializes the world by setting the character and level references.
   */
  setWorld() {
    this.character.world = this;
    this.level.enemies[13].world = this;
  }
 
  /**
   * Starts the main game loop.
   */
  run() {
    setStoppableInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
      this.checkCharacterPosition();
      this.checkBottleCollisions();
    }, 50);
  }

  /**
   * Checks if bottles can be thrown and initiates the throwing process.
   */
  checkThrowObjects() {
    this.throwObjects();
  }

  /**
   * Called to throw objects when conditions are met.
   */
  throwObjects() {
    this.throwCount++;
    if (this.canThrowBottle()) {
      this.thrownBottlesPosition();
    }
  }

  /**
   * Checks if the character can throw bottles.
   * @returns {boolean} - True if the character can throw bottles, otherwise False.
   */
  canThrowBottle() {
    return this.keyboard.D && this.thrownBottles > 0 && this.throwCount > 10;
  }

  /**
   * Places the thrown bottle at the correct position.
   */
  thrownBottlesPosition() {
    this.character.timeCount = 0;
    this.throwCount = 0;
    const startX = this.character.otherDirection ? this.character.x - 30 : this.character.x + 100;
    const startY = this.character.y + 100;
    let bottle = new throwableObjects(startX,startY,this.character.otherDirection);
    this.throwableObjects.push(bottle);
    this.sound.trow_bottle.play();
    this.thrownBottles--;
    this.StatusBottleBar.setpercentage(this.thrownBottles);
  }

  /**
   * Checks collisions between the character and various game objects.
   */
  checkCollisions() {
    let worldObjects = [
      ...this.level.enemies,
      ...this.level.coins,
      ...this.level.bottles,
    ];

    worldObjects.forEach((obj) => {
      this.allCollisionsObj(obj);
    });
  }

  /**
   * Handles collisions between the character and various game objects.
   * @param {GameObject} obj - The game object with which collision is checked.
   */
  allCollisionsObj(obj) {
    if (this.character.isColliding(obj)) {
      if (this.withChicken(obj)) {
        if (this.characterRequirement(obj)) {
          this.chickenReaction(obj);
        } else {
          this.chickenHit();
        }
      } else if (this.withCoins(obj)) {
        this.cointsReaction(obj);
      } else if (this.withBottles(obj)) {
        this.bottleReaction(obj);
      } else {
        this.endBossReaction();
        if (this.characterHealth()) {
          this.endBossWinReaction(obj);
        }
      }
    }
  }

/**
 * Checks if the given object is an instance of Chicken.
 * @param {GameObject} obj - The game object to check.
 * @returns {boolean} - True if the object is an instance of Chicken, false otherwise.
 */
  withChicken(obj) {
    return obj instanceof Chicken;
  }

/**
 * Checks if the character meets the requirements for reacting to a chicken object.
 * @param {GameObject} obj - The chicken game object.
 * @returns {boolean} - True if the character meets the requirements, false otherwise.
 */
  characterRequirement(obj) {
    return (
      this.character.y + this.character.offset.top < obj.y &&
      this.character.isFalling()
    );
  }

 /**
 * Handles the reaction when the character meets the requirements for a chicken object.
 * @param {GameObject} obj - The chicken game object.
 */
  chickenReaction(obj) {
    this.sound.chicken_kill_sound.play();
    obj.die();
    this.character.jump(15);
  }

/**
 * Handles the reaction when the character hits a chicken object.
 */
  chickenHit() {
    this.character.hit(5);
    this.StatusHealthBar.setpercentage(this.character.energy);
    this.sound.pain.play();
  }

/**
 * Checks if the given object is an instance of Coins.
 * @param {GameObject} obj - The game object to check.
 * @returns {boolean} - True if the object is an instance of Coins, false otherwise.
 */
  withCoins(obj) {
    return obj instanceof Coins;
  }

/**
 * Handles the reaction when the character collects coins.
 * @param {GameObject} obj - The coins game object.
 */
  cointsReaction(obj) {
    this.thrownCoins++;
    this.sound.coin.play();
    this.StatusCoinBar.setpercentage(this.thrownCoins);
    this.level.coins.splice(this.level.coins.indexOf(obj), 1);
  }

/**
 * Checks if the given object is an instance of Bottles.
 * @param {GameObject} obj - The game object to check.
 * @returns {boolean} - True if the object is an instance of Bottles, false otherwise.
 */
  withBottles(obj) {
    return obj instanceof Bottles;
  }

/**
 * Handles the reaction when the character throws a bottle and hits a bottle object.
 * @param {GameObject} obj - The bottle game object.
 */
  bottleReaction(obj) {
    this.thrownBottles++;
    this.sound.bottle.play();
    this.StatusBottleBar.setpercentage(this.thrownBottles);
    this.level.bottles.splice(this.level.bottles.indexOf(obj), 1);
  }

/**
 * Handles the reaction when the character gets hit by the end boss.
 */
  endBossReaction() {
    this.character.hit(50);
    this.StatusHealthBar.setpercentage(this.character.energy);
    this.sound.pain.play();
  }

/**
 * Checks if the character has no health remaining.
 * @returns {boolean} - True if the character has no health, false otherwise.
 */
  characterHealth() {
    return this.character.energy <= 0;
  }

/**
 * Handles the reaction when the end boss wins.
 * @param {GameObject} obj - The end boss game object.
 */
  endBossWinReaction(obj) {
    if (obj.boss_sound) {
      this.sound.endboss_win.play();
      obj.boss_sound = false;
    }
    obj.stopMoving = true;
  }

/**
 * Checks for collisions between thrown bottles and enemies.
 */
  checkBottleCollisions() {
    this.throwableObjects.forEach((thrownBottle, i) => {
      this.hitWithBottle(thrownBottle, i);
    });
  }

/**
 * Checks for collisions between a thrown bottle and enemies.
 * @param {GameObject} thrownBottle - The thrown bottle game object.
 * @param {number} i - The index of the thrown bottle.
 */
  hitWithBottle(thrownBottle, i) {
    this.allEnemys().forEach((enemy) => {
      if (this.throwBottleColliding(thrownBottle, enemy)) {
        if (this.bottleHitChicken(enemy)) {
          this.hitChickenReaction(enemy, i);
        } else if (this.bottleHitEndboss(enemy)) {
          if (this.timeCheckForHit(enemy)) {
            this.hitEndbossReaction(enemy, i);
          }
        }
      }
    });
  }

/**
 * Gets all enemy game objects from the level.
 * @returns {GameObject[]} - An array of enemy game objects.
 */
  allEnemys() {
    return this.level.enemies;
  }

/**
 * Checks if a thrown bottle is colliding with an enemy.
 * @param {GameObject} thrownBottle - The thrown bottle game object.
 * @param {GameObject} enemy - The enemy game object.
 * @returns {boolean} - True if the bottle is colliding with the enemy, false otherwise.
 */
  throwBottleColliding(thrownBottle, enemy) {
    return thrownBottle.isColliding(enemy);
  }

/**
 * Checks if the enemy hit by the bottle is a chicken.
 * @param {GameObject} enemy - The enemy game object.
 * @returns {boolean} - True if the enemy is a chicken, false otherwise.
 */
  bottleHitChicken(enemy) {
    return enemy instanceof Chicken;
  }

/**
 * Handles the reaction when the bottle hits a chicken.
 * @param {GameObject} enemy - The chicken game object.
 * @param {number} i - The index of the thrown bottle.
 */
  hitChickenReaction(enemy, i) {
    this.throwableObjects[i].spalshBottle();
    this.sound.glas_break.play();
    enemy.die();
    this.sound.chicken_kill_sound.play();
  }

/**
 * Checks if the enemy hit by the bottle is the end boss.
 * @param {GameObject} enemy - The enemy game object.
 * @returns {boolean} - True if the enemy is the end boss, false otherwise.
 */
  bottleHitEndboss(enemy) {
    return enemy instanceof Endboss;
  }

/**
 * Checks if enough time has passed since the last hit on the enemy.
 * @param {GameObject} enemy - The enemy game object.
 * @returns {boolean} - True if enough time has passed, false otherwise.
 */
  timeCheckForHit(enemy) {
    return !enemy.isHurt();
  }

/**
 * Handles the reaction when the bottle hits the end boss.
 * @param {GameObject} enemy - The end boss game object.
 * @param {number} i - The index of the thrown bottle.
 */
  hitEndbossReaction(enemy, i) {
    enemy.hit(10);
    this.sound.glas_break.play();
    this.sound.endboss_hurt.play();
    this.StatusHealthBarEndBoss.setpercentage(this.level.enemies[13].energy);
    this.throwableObjects[i].spalshBottle();
  }

/**
 * Draws the entire game world, including characters, enemies, and background objects.
 */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camer_x, 0);
    this.level.backgroundObject.forEach((background) => {
      background.moveWithParallax(this.character.x, this.character.otherDirection);
      this.addToMap(background);
    });
    this.allDrawObjects();
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  allDrawObjects() {
    this.ctx.translate(-this.camer_x, 0);
    this.addToMap(this.StatusHealthBar);
    this.addToMap(this.StatusBottleBar);
    this.addToMap(this.StatusCoinBar);
    this.addToMap(this.StatusHealthBarEndBoss);
    this.ctx.translate(this.camer_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camer_x, 0);
  }

/**
 * Adds an array of game objects to the map for drawing.
 * @param {GameObject[]} objects - An array of game objects to be added to the map.
 */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

/**
 * Adds a game object to the map for drawing.
 * @param {GameObject} mo - The game object to be added to the map.
 */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);

    if (mo.otherDirection) {
      this.flipImageback(mo);
    }
  }

/**
 * Flips the image horizontally for a game object.
 * @param {GameObject} mo - The game object whose image will be flipped.
 */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

/**
 * Reverts the image back to its original orientation after flipping.
 * @param {GameObject} mo - The game object whose image orientation will be reverted.
 */
  flipImageback(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

/**
 * Checks the character's position to determine if the boss fight is about to start.
 * Initiates the boss reaction if the character is within the boss range.
 */
  checkCharacterPosition() {
    if (this.characterPositionBossRange()) {
      this.bossReaction();
    }
    if (this.characterStartFight()) {
      this.showBossHealth();
    }
  }

/**
 * Checks if the character is within the boss range to trigger the boss reaction.
 * @returns {boolean} - True if the character is within the boss range and the boss reaction has not been played, false otherwise.
 */
  characterPositionBossRange() {
    return this.character.x >= 3000 && !this.intro_endboss_played;
  }

/**
 * Initiates the boss reaction, playing the intro sound, and marking the boss reaction as played.
 */
  bossReaction() {
    this.sound.intro_endboss.play();
    this.intro_endboss_played = true;
  }

/**
 * Checks if the character has started the boss fight.
 * @returns {boolean} - True if the character has started the boss fight, false otherwise.
 */
  characterStartFight() {
    return this.character.x >= 4670;
  }

/**
 * Displays the health bar of the end boss once the character has started the boss fight.
 */
  showBossHealth() {
    this.level.enemies[13].characterPosition = true;
    this.StatusHealthBarEndBoss.updateHealthBarPosition();
  }
}