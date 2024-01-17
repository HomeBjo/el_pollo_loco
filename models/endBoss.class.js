class Endboss extends MovableObject{
    height =400;
    width =250;
    y=60;
    x=2270;
    offset = {
        top:100,
        bottom:0,
        left:0,
        right:0,
    }
    characterPosition=false;
    endbossDead=false;
    start=false;
   
    

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
    
    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
        
       
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
    
    hadFirstContact=false;

    constructor(){
        super().loadImage(this.IMAGES_START[0])
        this.loadImages(this.IMAGES_START);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALK);
       
        this.speed = 2.15 + Math.random() * 0.25;
        this.animate();
        
    }
   

    

    animate() {
        setInterval(() => {
            if (!this.endbossDead && this.hadFirstContact && i > 8 ) {
              this.moveLeft();
            }
          }, 1000 / 60);

        let i = 0;
        this.enbossAnimationInterval = setInterval(() => {
            if (i < 8 && !this.endbossDead) {
                this.playAnimation(this.IMAGES_START);
            } else if (!(this.endbossDead)) {
                
                this.playAnimation(this.IMAGES_WALK);
                
            }
            i++;

            if (this.characterPosition && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact=true;
            }

            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            }

            if (this.isDead()) {
            
                this.playAnimationOnce(this.IMAGES_DEAD);
                this.endbossDead=true;
                
            }
        }, 200);
    }
}