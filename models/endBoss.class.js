class Endboss extends MovableObject{
    ARRAY = new Arrays();
    sound = new Sounds();
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
    // world;  // welt gesetzt fals nötig <
    characterPosition=false;
    endbossDead=false;
    hadFirstContact=false;
    stopMoving=false;
    boss_sound=true;
    pepe_win_sound=true;
    
    
   
    
 
  

    constructor(){
        super().loadImage(this.ARRAY.IMAGES_START_BOSS[0])
        this.loadImages(this.ARRAY.IMAGES_START_BOSS);
        this.loadImages(this.ARRAY.IMAGES_HURT_BOSS);
        this.loadImages(this.ARRAY.IMAGES_DEAD_BOSS);
        this.loadImages(this.ARRAY.IMAGES_WALK_BOSS);
        this.speed = 2.15 + Math.random() * 0.25;
        this.animate();
        
    }

    setVolume(volume){
        return this.sound.pepe_game_win.volume = volume;
      }
   

   

    animate() { 
        setStoppableInterval(() => {
            if (!this.endbossDead && this.hadFirstContact && i > 8 && !this.stopMoving ) {
              this.moveLeft();
            }
          }, 1000 / 60);

        let i = 0;
        this.enbossAnimationInterval = setStoppableInterval(() => {
            if (i < 8 && !this.endbossDead) {
                this.playAnimation(this.ARRAY.IMAGES_START_BOSS);
            } else if ((!this.endbossDead && !this.stopMoving)) {
                
                this.playAnimation(this.ARRAY.IMAGES_WALK_BOSS);
                this.test=true;
                
            }
            i++;

            if (this.characterPosition && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact=true;
            }

            if (this.isHurt()&& !(this.endbossDead)) {
                this.playAnimation(this.ARRAY.IMAGES_HURT_BOSS);
            }

            if (this.isDead()) {
            
                this.playAnimationOnce(this.ARRAY.IMAGES_DEAD_BOSS);
                
               
                this.endbossDead=true;
                if (this.pepe_win_sound) {
                    this.sound.pepe_game_win.play()   
                    this.pepe_win_sound=false;
                  } 
                
            }
        }, 200);
    }
}