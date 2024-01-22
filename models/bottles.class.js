class Bottles extends MovableObject {
  width = 65;
  height = 65;
  x = 90;
  y = 350;
  offset = {
    top: 1,
    bottom: 1,
    left: 15,
    right: 15,
  };
  // isDead = false;    glaube brauche ich nicht   

  IMAGES = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  constructor() {
    super();
    if (Math.random() < 0.5) {      //  zufälliges zahl ermitteln  wenn kleiner als 0,5 dan ture sons false  damit wechsele ich den pfad durch die if abfrage
      this.loadImage(this.IMAGES[0]);
    } else {
      this.loadImage(this.IMAGES[1]);
    }
    this.x = 300 + Math.random() * 1000;
  }
 
}