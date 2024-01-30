class drawableObjects {                       // im video ell pollo loco 2 mathe  vid 16 statusbar 2 allles auslagern 
    img;                                   // hier einmal deklariert damit der bei der vereerbung das mit gibt also können bars darauf zuggreifen 
    imageChace = {};
    currentImage=0;
    x=120;
    y=285;
    height=150;
    width =100;
    // currentStatus_max;
    // currentStatus_80;
    // currentStatus_60;
    // currentStatus_40;
    // currentStatus_low;     // wieso muss ich das hier nicht stehen haben um es veerben zu können ?

    loadImage(path){
        this.img = new Image(); // this.img = document.getElementbyId('image') <image id = "image" src>    genau das selbe _> VIEDO 7,8
        this.img.src = path;
    }

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height); //*2 so wäre die draw normal
        } catch (e) {
            console.log('Error loading image', e);
            console.log('could not load image', this.img);
        }
        

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