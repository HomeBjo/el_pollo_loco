class World {
  character = new Character();
  level = level1; //auslagern in video 13 objekte und davor die enemies und chicken usw in video 07 klassen anlegen (    clouds =level1.clouds ;enemies =level1.enemies ;backgroundObject =level1.backgroundObject; )  zu dem hier mit level-> level=level1 *2  auslagert in 14 character optimieren zu dieser version
  sound = new Sounds();
  canvas;
  ctx;
  keyboard;
  camer_x = 0;
  StatusHealthBar = new StatusHealthBar();
  StatusBottleBar = new StatusBottleBar();
  StatusCoinBar = new StatusCoinBar();
  throwableObjectsClass = new throwableObjects()
  StatusHealthBarEndBoss = new StatusHealthBarEndBoss();
  throwableObjects = []; //new throwableObjects(100,20)  drin stehen würde würde es sofort eine flasche werfen
  thrownBottles = 20;
  thrownCoins = 0;
  intro_endboss_played = false;
  characterPosition = false;
  throwCount=0;
 



  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld(); //*1
    this.run();
    this.sound.pain.volume = 0.1;
    this.sound.endboss_hurt.volume =0.1;
    this.sound.glas_break.volume =0.3;
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
      this.checkBottleCollisions();
    }, 50);
  }

  checkThrowObjects() {
    this.throwCount++
    if (this.keyboard.D && this.thrownBottles > 0 && this.throwCount>10) {
      this.character.timeCount=0; 
      this.throwCount=0;
      const startX = this.character.otherDirection ? this.character.x - 30 : this.character.x + 100; // setze variablen fest und fragt durch den operator ab ? wen wahr dan -30  : und wen falsch dan +100
      const startY = this.character.y + 100;
      let bottle = new throwableObjects(
        startX,
        startY,
        this.character.otherDirection
      ); // bottle wurf position
      this.throwableObjects.push(bottle);
      this.sound.trow_bottle.play();

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
             this.character.isFalling() 
          )  {
            this.sound.chicken_kill_sound.play();
            obj.die();
            this.character.jump(15);
          } else {
            //von den chicken dmg
            this.character.hit(5);
            this.StatusHealthBar.setpercentage(this.character.energy);
            this.sound.pain.play();
          }
        } else if (obj instanceof Coins) {
          this.thrownCoins++;
          this.sound.coin.play();
          this.StatusCoinBar.setpercentage(this.thrownCoins);
          this.level.coins.splice(this.level.coins.indexOf(obj), 1);
        } else if (obj instanceof Bottles) {
          this.thrownBottles++;
          this.sound.bottle.play();
          this.StatusBottleBar.setpercentage(this.thrownBottles);
          this.level.bottles.splice(this.level.bottles.indexOf(obj), 1); 
        } else {
          // von allen anderen dmg
          this.character.hit(100);
          this.StatusHealthBar.setpercentage(this.character.energy);
          this.sound.pain.play();
        }
      }
    });
    
  }

  checkBottleCollisions() {

    this.throwableObjects.forEach((thrownBottle, i) => {
        this.level.enemies.forEach((enemy) => {
            if (thrownBottle.isColliding(enemy)) {
                if (enemy instanceof Chicken) {
                    this.throwableObjects[i].spalshBottle();
                    this.sound.glas_break.play()
                    enemy.die();
                    this.sound.chicken_kill_sound.play();
                } else if (enemy instanceof Endboss) {
                    if (!enemy.isHurt()) {
                        enemy.hit(10);
                        this.sound.glas_break.play()
                        this.sound.endboss_hurt.play()
                        this.StatusHealthBarEndBoss.setpercentage(this.level.enemies[3].energy);
                        
                        this.throwableObjects[i].spalshBottle();
                    }
                }
            }
        });
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
    this.addToMap(this.StatusHealthBarEndBoss);
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
      this.sound.intro_endboss.play();
      this.intro_endboss_played = true; //  die variable erst auf false setzen und anch dem play auf true damit es nur einmal abspielt
      
    } if (this.character.x >= 1650)  {
      this.level.enemies[3].characterPosition=true;
      this.StatusHealthBarEndBoss.updateHealthBarPosition();

  }
}}
