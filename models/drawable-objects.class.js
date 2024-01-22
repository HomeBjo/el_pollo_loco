class drawableObjects {                       // im video ell pollo loco 2 mathe  vid 16 statusbar 2 allles auslagern 
    img;
    ARRAY = new Arrays();                     // hier einmal deklariert damit der bei der vereerbung das mit gibt also können bars darauf zuggreifen 
    imageChace = {};
    currentImage=0;
    x=120;
    y=285;
    height=150;
    width =100;
    currentStatus_max;
    currentStatus_80;
    currentStatus_60;
    currentStatus_40;
    currentStatus_low;

    loadImage(path){
        this.img = new Image(); // this.img = document.getElementbyId('image') <image id = "image" src>    genau das selbe _> VIEDO 7,8
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); //*2 so wäre die draw normal

    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss){
         ctx.beginPath();
         ctx.lineWidth = "5";
         ctx.strokeStyle = "blue";
         ctx.rect(this.x, this.y, this.width, this.height);
         ctx.stroke();
        }
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof throwableObjects || this instanceof Coins || this instanceof Bottles) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "red";
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom
            );
            ctx.stroke();
        }
        // if ( this instanceof Endboss ) {

        //     const image = new Image();           // theo könnte man auch auf world und die klasse zugreifen die da mit new ist oder so     const image = this.worldImage;
        //     image.src = "img/7_statusbars/2_statusbar_endboss/orange/orange0.png";
        //     ctx.rect(
        //     this.x + this.offset.left,
        //         this.y + this.offset.top,
        //         this.width - this.offset.left - this.offset.right,
        //         this.height - this.offset.top - this.offset.bottom
        //         );
        //     // Zeichne das Bild auf den Canvas
        //     ctx.drawImage(image, this.x, this.y, this.width, this.height);
        // } _<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<falls der endboss leben übersich haben soll anstatt auf der map
    }


    loadImages(arr) {
        arr.forEach((path)=> {
        let img = new Image();
        img.src = path; 
        this.imageChace[path]=img;
    });
}

resolveImageIndex(){
    if (this.percentage == this.currentStatus_max ) {
        return 5;  
    }
    else if (this.percentage > this.currentStatus_80 ) {
        return 4;  
    }
    else if  (this.percentage > this.currentStatus_60 ) {
        return 3;  
    }
    else if  (this.percentage > this.currentStatus_40 ) {
        return 2;  
    }
    else if  (this.percentage >= this.currentStatus_low ) {
        return 1;  
    }
    else {
        return 0;  
    }

}


}