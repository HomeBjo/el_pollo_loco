class MovableObject extends drawableObjects{
    currentImage2 = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0 ;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    offset = {
        top:0,
        bottom:0,
        left:0,
        right:0,
    }

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {                         // die abfrage das es wann es ausgelöst wird entweder wen 
            this.y-=this.speedY;
            this.speedY -= this.acceleration; 
        }                                           //also in der funktion wird beschrieben das er immer fällt gravity halt  aber wir fangen das ab mit der if also die setzt nur ein wen er darüber ist usw
        if (!this.isAboveGround()) {
            this.y = 125;                                                 // damit ich nach den springen die selbe boden höhe wieder habe
            this.speedY = 0;                                             
        }
        }, 1000 / 25);
    }

    isAboveGround(){
        if (this instanceof throwableObjects) {                       // throwable object fällt immer weiter 
            return true;    
        } else {
        return this.y < 125       
        }                                               // wo der boden ist  also wo der anfängt
    }


   

    //beta version
    isColliding(mo) {
        return (
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
    }
    
// abgeschireben video 
    // isColliding(mo){ 
    //    return this.x + this.width - this.offset.right>mo.x + mo.offset.left &&
    //     this.y + this.height - this.offset.bottom>mo.y + mo.offset.top &&
    //     this.x + this.offset.left <  mo.x + mo.width - mo.offset.right &&
    //     this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;

    // }

    // zusammmen mit gpt 
    // isColliding(obj){ 
    //     return (this.otherDirection ? (this.x + this.width) : (this.x + this.width - this.offsetWidth)) >= obj.x &&     // für die spieglung verantwortlich
    //     this.x <= (obj.x + obj.width) &&
    //     (this.y + this.height) >= obj.y &&
    //     this.y <= (obj.y + obj.height);
    // }

//     // DA  // Bessere Formel zur Kollisionsberechnung (Genauer)
//     isColliding (obj) {
//         return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
//                 (this.y + this.offsetY + this.height) >= obj.y &&
//                 (this.y + this.offsetY) <= (obj.y + obj.height)
//                  // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

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
    
    playAnimationOnce(images) {
        if (this.currentImage2 < images.length) {
            let path = images[this.currentImage2];
            this.img = this.imageChace[path];
            this.currentImage2++;
        }
    }}