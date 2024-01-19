class throwableObjects extends MovableObject {
    //  offset = {
    //     top:3,
    //     bottom:3,
    //     left:3,
    //     right:3,
    // }

 IMAGES = [
    "img/6_salsa_bottle/salsa_bottle.png"

    ];

IMAGES_SPLASH = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png"
  ];

    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_SPLASH);
        
        this.x=x;
        this.y=y;
        this.otherDirection = otherDirection;
        this.height =60;
        this.width =50;
        
        this.trow()
       
       


}

 trow() {
        this.speedY = 30;
        this.applyGravity();

        setInterval(() => {
            if (!this.otherDirection) {
                this.x += 10;
            } else {
                this.x -= 10;
            }
        }, 25);
    }

  

splash() {
    this.playAnimationOnce(this.IMAGES_SPLASH);
}

   
    

    
        
        
    






}


 
  

  