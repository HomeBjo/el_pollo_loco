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
  thrownBottles = 20;
  thrownCoins = 0;
  intro_endboss_played = false;
  characterPosition = false;
  throwCount = 0;
  endboss_win = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
    this.level.enemies[3].world = this;
  }

  run() {
    setStoppableInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
      this.checkCharacterPosition();
      this.checkBottleCollisions();
    }, 50);
  }

  checkThrowObjects() {
    this.throwObjects();
  }

  throwObjects() {
    this.throwCount++;
    if (this.canThrowBottle()) {
      this.thrownBottlesPosition();
    }
  }

  canThrowBottle() {
    return this.keyboard.D && this.thrownBottles > 0 && this.throwCount > 10;
  }

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

  withChicken(obj) {
    return obj instanceof Chicken;
  }

  characterRequirement(obj) {
    return (
      this.character.y + this.character.offset.top < obj.y &&
      this.character.isFalling()
    );
  }

  chickenReaction(obj) {
    this.sound.chicken_kill_sound.play();
    obj.die();
    this.character.jump(15);
  }

  chickenHit() {
    this.character.hit(5);
    this.StatusHealthBar.setpercentage(this.character.energy);
    this.sound.pain.play();
  }

  withCoins(obj) {
    return obj instanceof Coins;
  }

  cointsReaction(obj) {
    this.thrownCoins++;
    this.sound.coin.play();
    this.StatusCoinBar.setpercentage(this.thrownCoins);
    this.level.coins.splice(this.level.coins.indexOf(obj), 1);
  }

  withBottles(obj) {
    return obj instanceof Bottles;
  }

  bottleReaction(obj) {
    this.thrownBottles++;
    this.sound.bottle.play();
    this.StatusBottleBar.setpercentage(this.thrownBottles);
    this.level.bottles.splice(this.level.bottles.indexOf(obj), 1);
  }

  endBossReaction() {
    this.character.hit(100);
    this.StatusHealthBar.setpercentage(this.character.energy);
    this.sound.pain.play();
  }

  characterHealth() {
    return this.character.energy <= 0;
  }

  endBossWinReaction(obj) {
    if (obj.boss_sound) {
      this.sound.endboss_win.play();
      obj.boss_sound = false;
    }
    obj.stopMoving = true;
  }

  checkBottleCollisions() {
    this.throwableObjects.forEach((thrownBottle, i) => {
      this.hitWithBottle(thrownBottle, i);
    });
  }

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
  allEnemys() {
    return this.level.enemies;
  }

  throwBottleColliding(thrownBottle, enemy) {
    return thrownBottle.isColliding(enemy);
  }

  bottleHitChicken(enemy) {
    return enemy instanceof Chicken;
  }

  hitChickenReaction(enemy, i) {
    this.throwableObjects[i].spalshBottle();
    this.sound.glas_break.play();
    enemy.die();
    this.sound.chicken_kill_sound.play();
  }

  bottleHitEndboss(enemy) {
    return enemy instanceof Endboss;
  }

  timeCheckForHit(enemy) {
    return !enemy.isHurt();
  }

  hitEndbossReaction(enemy, i) {
    enemy.hit(10);
    this.sound.glas_break.play();
    this.sound.endboss_hurt.play();
    this.StatusHealthBarEndBoss.setpercentage(this.level.enemies[3].energy);
    this.throwableObjects[i].spalshBottle();
  }

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

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);

    if (mo.otherDirection) {
      this.flipImageback(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageback(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  checkCharacterPosition() {
    if (this.characterPositionBossRange()) {
      this.bossReaction();
    }
    if (this.characterStartFight()) {
      this.showBossHealth();
    }
  }

  characterPositionBossRange() {
    return this.character.x >= 1000 && !this.intro_endboss_played;
  }

  bossReaction() {
    this.sound.intro_endboss.play();
    this.intro_endboss_played = true;
  }

  characterStartFight() {
    return this.character.x >= 1650;
  }

  showBossHealth() {
    this.level.enemies[3].characterPosition = true;
    this.StatusHealthBarEndBoss.updateHealthBarPosition();
  }
}