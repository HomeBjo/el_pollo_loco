class drawableObjects {                       // im video ell pollo loco 2 mathe  vid 16 statusbar 2 allles auslagern 
    img;
    imageChace = {};
    currentImage=0;
    x=120;
    y=285;
    height=150;
    width =100;

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
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss){
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y-this.offsetY, this.width-this.offsetWidth, this.height-this.offsetHeight);
            ctx.stroke();
           }
    
    }

    loadImages(arr) {
        arr.forEach((path)=> {
        let img = new Image();
        img.src = path; 
        this.imageChace[path]=img;
    });
}


}