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
    }

    stopAllSounds() {
        this.forEachSound(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
    }

    muteAllSounds() {
        this.forEachSound(sound => sound.volume = 0);
    }

    forEachSound(callback) {
        Object.values(this).forEach(value => {
            if (value instanceof Audio) {
                callback(value);
            }
        });
    }
}
