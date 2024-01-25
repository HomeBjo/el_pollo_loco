class Sounds {
    game_music = new Audio("audio/main_music.mp3");
    chicken_kill_sound = new Audio("audio/chicken_die.mp3");
    intro_endboss = new Audio("audio/endboss_start.mp3");
    trow_bottle = new Audio("audio/throwing_bottle.mp3");
    pain = new Audio("audio/pain.mp3");
    walking_sound_pepe = new Audio("audio/walking_pepe.mp3");
    coin = new Audio("audio/coin_in_bag.mp3");
    bottle = new Audio("audio/bottle_clink.mp3");
    glas_break = new Audio("audio/glass_breaking.mp3");
    endboss_hurt = new Audio("audio/endboss_hit_sounds.mp3");
    endboss_win = new Audio("audio/endboss_wins.mp3");
    pepe_game_win = new Audio("audio/pepe_wins.mp3");

    constructor() {
        this.pain.volume = 0.1;
        this.endboss_hurt.volume = 0.1;
        this.glas_break.volume = 0.3;
        this.endboss_win.volume = 0.3;
        this.walking_sound_pepe.volume = 0.3;
        this.pepe_game_win.volume = 0.3;
        this.isMuted=false; 
        this.previousVolume = 0.3;   // evt mal als object testen sons shit drauf !!  also das jeder sound halt sein eigenes volume hat 1!!
    }

    stopAllSounds() {
        this.forEachSound(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
    }

    muteAllSounds() {
        this.forEachSound(audio => {
            if (this.isMuted) {
                audio.volume = this.previousVolume;  // Zurück zur vorherigen Lautstärke
            } else {
                this.previousVolume = audio.volume;  // Speichere die aktuelle Lautstärke
                audio.volume = 0;  // Stummschalten
            }
        });

        this.isMuted = !this.isMuted;  // Kehre den Stummzustand um
    }

    forEachSound(callback) {
        const soundObjects = Object.values(this);
        soundObjects.forEach(value => {
            if (value instanceof Audio) {
                callback(value);
            }
        });
    }
}





// von dem zu dem 

// stopAllSounds() {
//     this.game_music.pause();
//     this.game_music.currentTime = 0;

//     this.chicken_kill_sound.pause();
//     this.chicken_kill_sound.currentTime = 0;

//     this.intro_endboss.pause();
//     this.intro_endboss.currentTime = 0;

//     this.trow_bottle.pause();
//     this.trow_bottle.currentTime = 0;

//     this.pain.pause();
//     this.pain.currentTime = 0;

//     this.walking_sound_pepe.pause();
//     this.walking_sound_pepe.currentTime = 0;

//     this.coin.pause();
//     this.coin.currentTime = 0;

//     this.bottle.pause();
//     this.bottle.currentTime = 0;

//     this.glas_break.pause();
//     this.glas_break.currentTime = 0;

//     this.endboss_hurt.pause();
//     this.endboss_hurt.currentTime = 0;

//     this.endboss_win.pause();
//     this.endboss_win.currentTime = 0;

//     this.pepe_game_win.pause();
//     this.pepe_game_win.currentTime = 0;
// }
// muteAllSounds(){
   
//     this.game_music.volume = 0;

    
//     this.chicken_kill_sound.volume = 0;


//     this.intro_endboss.volume = 0;

  
//     this.trow_bottle.volume = 0;

    
//     this.pain.volume = 0;

  
//     this.walking_sound_pepe.volume = 0;

   
//     this.coin.volume = 0;

  
//     this.bottle.volume = 0;

 
//     this.glas_break.volume = 0;

    
//     this.endboss_hurt.volume = 0;

    
//     this.endboss_win.volume = 0;

    
//     this.pepe_game_win.volume = 0;
// }
