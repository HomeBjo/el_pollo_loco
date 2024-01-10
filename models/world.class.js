class World {
  character = new Character();
  level=level1              //auslagern in video 13 objekte und davor die enemies und chicken usw in video 07 klassen anlegen (    clouds =level1.clouds ;enemies =level1.enemies ;backgroundObject =level1.backgroundObject; )  zu dem hier mit level-> level=level1 *2  auslagert in 14 character optimieren zu dieser version
  canvas;
  ctx;
  keyboard;
  camer_x =0;
  statusBar = new statusBar();
  throwableObjects = [new throwableObjects()];
  game_music = new Audio('audio/main_music.mp3');
  chicken_kill = new Audio('audio/chicken_die.mp3');
  intro_endboss = new Audio('audio/endboss_start.mp3');
  trow_bottle = new Audio('audio/throwing_bottle.mp3');
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

  run(){
    setInterval(() => {
      
      this.checkCollisions();
      this.checkThrowObjects();
      this.checkCharacterPosition()
    }, 100); }

    checkThrowObjects(){
      if (this.keyboard.D) {
        const startX = this.character.otherDirection ? this.character.x - 30 : this.character.x + 100;   // setze variablen fest und fragt durch den operator ab ? wen wahr dan -30  : und wen falsch dan +100
        const startY = this.character.y + 100;
        let bottle = new throwableObjects(startX, startY, this.character.otherDirection);      // bottle wurf position
        this.throwableObjects.push(bottle)
        this.trow_bottle.play();

        
      }
    }

    checkCollisions() {
      this.level.enemies.forEach((enemy) => {
          if (this.character.isColliding(enemy)) {
              if (enemy instanceof Chicken) {  
                  if (this.character.y + this.character.offset.top < enemy.y && this.character.isAboveGround()) {
                      console.log('Charakter trifft Chicken von oben!');
                      this.chicken_kill.play();
                      enemy.die();
                      this.character.jump(10);

                  } else {
                      this.character.hit();
                      this.statusBar.setpercentage(this.character.energy);
                      console.log('TREFFER TREFFER', this.character.energy,level1);
                  }
              } else {  
                  
                  this.character.hit();
                  this.statusBar.setpercentage(this.character.energy);
                  console.log('TREFFER TREFFER', this.character.energy);
              }
          }
      });
  }
  

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camer_x, 0);                  // kamera position
    this.addObjectsToMap(this.level.backgroundObject);

   

    this.ctx.translate(-this.camer_x, 0);     // back----- space for fix objects 
    this.addToMap(this.statusBar); 
    this.ctx.translate(this.camer_x, 0);    // Forwards


    this.addToMap(this.character);
    
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
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

     mo.draw(this.ctx);                // hier stand das vorher drin *3 bischen geändern guck google doc
     mo.drawFrame(this.ctx);
 

    if (mo.otherDirection) {
      this.flipImageback(mo);
    
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);    // durch spieglung die breite anpassen das es an der selben stelle wider gedrwat wird
    this.ctx.scale(-1, 1);             //spieglung !
    mo.x = mo.x * -1;
  }

  flipImageback(mo){
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
  checkCharacterPosition() {
    if (this.character.x >= 1000 && !this.intro_endboss_played) {  //nach dem && => introEndbossPlayed zuerst auf false und dan in der funktion auf true damit nur einmal abgespielt wird 
        this.intro_endboss.play();
        this.intro_endboss_played = true;  //  die variable erst auf false setzen und anch dem play auf true damit es nur einmal abspielt
    }
}
}
