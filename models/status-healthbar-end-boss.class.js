class StatusHealthBarEndBoss extends drawableObjects {
    currentStatus_max=100;
    currentStatus_80=80;
    currentStatus_60=60;
    currentStatus_40=40;
    currentStatus_low=20;
    showEndBossHealth=false;
   
    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.ARRAY.IMAGES_HEALTH_BAR_BOSS);
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
        let path = this.ARRAY.IMAGES_HEALTH_BAR_BOSS[this.resolveImageIndex()];
        this.img =this.imageChace[path]
        
    }

    // resolveImageIndex(){
    //     if (this.percentage == 100 ) {
    //         return 5;  
    //     }
    //     else if (this.percentage > 80 ) {
    //         return 4;  
    //     }
    //     else if  (this.percentage > 60 ) {
    //         return 3;  
    //     }
    //     else if  (this.percentage > 40 ) {
    //         return 2;  
    //     }
    //     else if  (this.percentage > 20 ) {
    //         return 1;  
    //     }
    //     else {
    //         return 0;  
    //     }

    // }

}