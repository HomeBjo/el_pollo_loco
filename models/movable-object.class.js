class MovableObject extends drawableObjects{
    speed = 0.15;
    otherDirection = false;
    speedY = 0 ;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    offsetY=0;
    offsetHeight=0;
    offsetWidth=0;

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {                         // die abfrage das es wann es ausgelöst wird entweder wen 
            this.y-=this.speedY;
            this.speedY -= this.acceleration; }                                           //also in der funktion wird beschrieben das er immer fällt gravity halt  aber wir fangen das ab mit der if also die setzt nur ein wen er darüber ist usw
        }, 1000 / 25);
    }

    isAboveGround(){
        if (this instanceof throwableObjects) {                       // throwable object fällt immer weiter 
            return true;    
        } else {
        return this.y < 125       
        }                                               // wo der boden ist  also wo der anfängt
    }


   

    

  

    // zusammmen mit gpt
    isColliding(obj){ 
        return (this.otherDirection ? (this.x + this.width) : (this.x + this.width - this.offsetWidth)) >= obj.x &&
        this.x <= (obj.x + obj.width) &&
        (this.y + this.height) >= obj.y &&
        this.y <= (obj.y + obj.height);
    }

//     // DA  // Bessere Formel zur Kollisionsberechnung (Genauer)
//     isColliding (obj) {
//         return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
//                 (this.y + this.offsetY + this.height) >= obj.y &&
//                 (this.y + this.offsetY) <= (obj.y + obj.height)
//                  // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

// }
    
    
    
    
      // das hier soll besser sein funzt aber nicht ich denke weil x und y gros ist und weil wohl die offsetY nicht def !

    // isColliding (mo) {
    //     return this.x + this.width-this.offsetWidth > mo.x &&
    //     this.y-this.offsetY + this.height-this.offsetHeight > mo.y &&
    //     this.x  < mo.x &&
    //     this.y-this.offsetY < mo.y + mo.height 
    // }

    hit(){
        this.energy-=5;
        if (this.energy < 0) {
            this.energy = 0;  
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; // difference in ms
        timePassed = timePassed / 1000;   // difference in s
        return timePassed < 0.5;

    }

    isDead(){
        return this.energy == 0;
     }

      /**
       * 
       * @param {array} arr - [immer mehr bilder ] 
       */



    moveRight() {
        this.x+=this.speed;
        
        
    }
    moveLeft(){
        this.x -= this.speed;
       
    }

    jump(){                          // da wir das in character nmochmal machen verstehe ich den sinn hier noch net  ---<<<<<< nochmal gucken gelöst das war doppelte funk name und aufruf reihenfolge ! weil im char leer war 
    //   this.speedY = 30
    }

    playAnimation(images){                                                  //*3  hier images z.b.IMAGES_WALKING
        let i = this.currentImage % images.length; // let i = 0 % 6 ; => 0, rest 0  // i =0,1,2,3,4,5, und dan wieder 0 und nicht 6 // let i = 0 % 6 ; => 0, rest 0  // i =0,1,2,3,4,5, und dan wieder 0 und nicht 6  das prozentzeichen nennt man modolu //und jetzt nachtrag nicht mehr this.IMAGES_WALKING weil es sich sons immer an den einen array oriendtiert hier kommt images hin
        let path = images[i];                                                 //*3 deswegen hier nicht mehr   let path = this.IMAGES_WALKING[i]; sondern images[i]
        this.img =this.imageChace[path]
        this.currentImage++;

    }
}