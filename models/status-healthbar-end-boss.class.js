class StatusHealthBarEndBoss extends drawableObjects {
    showEndBossHealth=false;
    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange100.png'
    ];

    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = -100;
        this.width = 200;
        this.height = 60;
        this.setpercentage(100);
    }

    updateHealthBarPosition() {
            let endY = -5; // Die endgültige position der bar 
            let currentY = this.y; // Die aktuelle position der bar 
            let speed = 20; // wie schnell der das anpasst
    
            if (currentY < endY) {
                //  y aktualisieren bis end ereicht ist
                this.y = Math.min(currentY + speed, endY);
            }
        
    }

    //setpercentage(50) von außen auf den wert zugreifen ändern usw
    setpercentage(percentage){
        this.percentage = percentage
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img =this.imageChace[path]
        
    }

    resolveImageIndex(){
        if (this.percentage == 100 ) {
            return 5;  
        }
        else if (this.percentage > 80 ) {
            return 4;  
        }
        else if  (this.percentage > 60 ) {
            return 3;  
        }
        else if  (this.percentage > 40 ) {
            return 2;  
        }
        else if  (this.percentage > 20 ) {
            return 1;  
        }
        else {
            return 0;  
        }

    }

}