class World {
  character = new Character();
  level = level1; //auslagern in video 13 objekte und davor die enemies und chicken usw in video 07 klassen anlegen (    clouds =level1.clouds ;enemies =level1.enemies ;backgroundObject =level1.backgroundObject; )  zu dem hier mit level-> level=level1 *2  auslagert in 14 character optimieren zu dieser version
  canvas;
  ctx;
  keyboard;
  camer_x = 0;
  StatusHealthBar = new StatusHealthBar();
  StatusBottleBar = new StatusBottleBar();
  StatusCoinBar = new StatusCoinBar();
  throwableObjects = []; //new throwableObjects(100,20)  drin stehen würde würde es sofort eine flasche werfen
  thrownBottles = 0;
  thrownCoins = 0;
  game_music = new Audio("audio/main_music.mp3");
  chicken_kill = new Audio("audio/chicken_die.mp3");
  intro_endboss = new Audio("audio/endboss_start.mp3");
  trow_bottle = new Audio("audio/throwing_bottle.mp3");
  pain = new Audio("audio/pain.mp3");
  intro_endboss_played = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld(); //*1
    this.run();
  }

  setWorld() {
    // hier übergeben wir die ganze world an character damit er auf alle variablen zugreifen kann *1
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
      this.checkCharacterPosition();
    }, 100);
  }

  checkThrowObjects() {
    if (this.keyboard.D && this.thrownBottles > 0) {
      const startX = this.character.otherDirection
        ? this.character.x - 30
        : this.character.x + 100; // setze variablen fest und fragt durch den operator ab ? wen wahr dan -30  : und wen falsch dan +100
      const startY = this.character.y + 100;
      let bottle = new throwableObjects(
        startX,
        startY,
        this.character.otherDirection
      ); // bottle wurf position
      this.throwableObjects.push(bottle);
      this.trow_bottle.play();

      // Reduziere die Anzahl der geworfenen Flaschen
      this.thrownBottles--;
      this.StatusBottleBar.setpercentage(this.thrownBottles);
    }
  }

  checkCollisions() {
    let worldObjects = [
      ...this.level.enemies,   // Spread Operator...   =  worldObjects.concat verbindet zwei oder mehrere arrays zu einem  
      ...this.level.coins,
      ...this.level.bottles,
    ];

    worldObjects.forEach((obj) => {
      if (this.character.isColliding(obj)) {
        if (obj instanceof Chicken) {
          if (
            this.character.y + this.character.offset.top < obj.y &&
            this.character.isAboveGround() //&&
            // this.character.y > -100.6  // soll eig eine höhen abfrage sein damit der char eine gewisse höhe erreichen muss CALL FRAGEN
          ) {
            console.log("Charakter trifft Chicken von oben!");
            this.chicken_kill.play();
            obj.die();
            this.character.jump(10);
          } else {
            //von den chicken dmg
            this.character.hit();
            this.StatusHealthBar.setpercentage(this.character.energy);
            this.pain.play();
            console.log("TREFFER TREFFER", this.character.energy);
          }
        } else if (obj instanceof Coins) {
          this.thrownCoins++;
          this.StatusCoinBar.setpercentage(this.thrownCoins);
          const indexOfCoins = this.level.coins.indexOf(obj);
          if (indexOfCoins !== -1) {
            this.level.coins.splice(indexOfCoins, 1);
          }
          console.log("Charakter sammelt Münze!");
        } else if (obj instanceof Bottles) {
          this.thrownBottles++;
          this.StatusBottleBar.setpercentage(this.thrownBottles);
          const indexOfBottle = this.level.bottles.indexOf(obj);
          if (indexOfBottle !== -1) {
            this.level.bottles.splice(indexOfBottle, 1);
          }

          console.log("Charakter trifft Flasche!", obj);
        } else {
          // von allen anderen dmg
          this.character.hit();
          this.StatusHealthBar.setpercentage(this.character.energy);
          this.pain.play();
          console.log("TREFFER TREFFER", this.character.energy);
        }
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camer_x, 0); // kamera position
    // this.addObjectsToMap(this.level.backgroundObject);

    //Anpassung der x-Position der Hintergründe
    this.level.backgroundObject.forEach((background) => {
      background.moveWithParallax(
        this.character.x,
        this.character.otherDirection
      );
      this.addToMap(background);
    });

    this.ctx.translate(-this.camer_x, 0); // back----- space for fix objects
    this.addToMap(this.StatusHealthBar);
    this.addToMap(this.StatusBottleBar);
    this.addToMap(this.StatusCoinBar);
    this.ctx.translate(this.camer_x, 0); // Forwards

    this.addToMap(this.character);

    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.throwableObjects);

    this.ctx.translate(-this.camer_x, 0);

    // draw wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      // jetzt hinzugefügt das der sich beim umdrehen spiegelt *2
      this.flipImage(mo);
    }

    mo.draw(this.ctx); // hier stand das vorher drin *3 bischen geändern guck google doc
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageback(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0); // durch spieglung die breite anpassen das es an der selben stelle wider gedrwat wird
    this.ctx.scale(-1, 1); //spieglung !
    mo.x = mo.x * -1;
  }

  flipImageback(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  checkCharacterPosition() {
    if (this.character.x >= 1000 && !this.intro_endboss_played) {
      //nach dem && => introEndbossPlayed zuerst auf false und dan in der funktion auf true damit nur einmal abgespielt wird
      this.intro_endboss.play();
      this.intro_endboss_played = true; //  die variable erst auf false setzen und anch dem play auf true damit es nur einmal abspielt
    }
  }
}
