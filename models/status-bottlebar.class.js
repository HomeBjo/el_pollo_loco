class StatusBottleBar extends drawableObjects {

    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',

    
    ];



    percentage = 100;
   

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 5;
        this.y = 33;
        this.width = 200;
        this.height = 60;
        this.setpercentage(0)
    }

    setpercentage(percentage){
        this.percentage = percentage
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img =this.imageChace[path]
        
    }

    resolveImageIndex(){
        if (this.percentage == 4 ) {
            return 5;  
        }
        else if (this.percentage > 3 ) {
            return 4;  
        }
        else if  (this.percentage > 2 ) {
            return 3;  
        }
        else if  (this.percentage > 1 ) {
            return 2;  
        }
        else if  (this.percentage >= 1 ) {
            return 1;  
        }
        else {
            return 0;  
        }

    }}
