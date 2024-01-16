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

    IMAGES_START = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
       
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    IMAGES_DEAD =[
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    constructor(){
        super().loadImage(this.IMAGES_START[0])
        this.loadImages(this.IMAGES_START);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x=2270;
        this.animate();
    }

    test(lala){
        this.lala=lala
    }

    animate() {
        this.enbossAnimationInterval = setInterval(() => {
            if (this.isDead()) {
                // clearInterval(this.enbossAnimationInterval);
                this.playAnimationOnce(this.IMAGES_DEAD, () => {
                    // Hier kannst du zusätzlichen Code ausführen, wenn die Todesanimation abgeschlossen ist.
                    // Zum Beispiel: this.playAnimation(this.IMAGES_WALKING);
                });
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.lala==1) {
                this.playAnimationOnce(this.IMAGES_START);
            }

        }, 200);
    }
}