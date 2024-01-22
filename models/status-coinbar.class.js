class StatusCoinBar extends drawableObjects {
    currentStatus_max=4;
    currentStatus_80=3;
    currentStatus_60=2;
    currentStatus_40=1;
    currentStatus_low=1;

    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.ARRAY.IMAGES_COIN_BAR);
        this.x = 5;
        this.y = 80;
        this.width = 200;
        this.height = 60;
        this.setpercentage(0)
    }

    setpercentage(percentage){
        this.percentage = percentage
        let path = this.ARRAY.IMAGES_COIN_BAR[this.resolveImageIndex()];
        this.img = this.imageChace[path]
        
    }

    // resolveImageIndex(){
    //     if (this.percentage == 4 ) {
    //         return 5;  
    //     }
    //     else if (this.percentage > 3 ) {
    //         return 4;  
    //     }
    //     else if  (this.percentage > 2 ) {
    //         return 3;  
    //     }
    //     else if  (this.percentage > 1 ) {
    //         return 2;  
    //     }
    //     else if  (this.percentage >= 1 ) {
    //         return 1;  
    //     }
    //     else {
    //         return 0;  
    //     }

    // }
}

