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
  isDead = false;

  IMAGES = [
    "img/7_statusbars/3_icons/icon_salsa_bottle.png",
  ];
 
  constructor() {
    super().loadImage("img/7_statusbars/3_icons/icon_salsa_bottle.png");
    
    this.x = 300 + Math.random() * 1000;
  
  
  }


}
