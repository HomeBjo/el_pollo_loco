class Endboss extends MovableObject{
    height =400;
    width =250;
    y=60;
    offset = {
        top:100,
        bottom:0,
        left:0,
        right:0,
    }

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
       
    ];

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING);
        this.x=2270;
        this.animate();
     
    }

    animate(){
       
        
        setInterval(()=>{
    
            this.playAnimation(this.IMAGES_WALKING);          // video 16  funktioins merhmals da auf eine funktion verkleinern also auslagern und übergeben bilder *3
        },200);
        
    }

}