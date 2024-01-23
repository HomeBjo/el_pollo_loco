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
    pepe_game_win=new Audio("audio/pepe_wins.mp3");

    stopAllSounds() {
        this.game_music.pause();
        this.game_music.currentTime = 0;

        this.chicken_kill_sound.pause();
        this.chicken_kill_sound.currentTime = 0;

        this.intro_endboss.pause();
        this.intro_endboss.currentTime = 0;

        this.trow_bottle.pause();
        this.trow_bottle.currentTime = 0;

        this.pain.pause();
        this.pain.currentTime = 0;

        this.walking_sound_pepe.pause();
        this.walking_sound_pepe.currentTime = 0;

        this.coin.pause();
        this.coin.currentTime = 0;

        this.bottle.pause();
        this.bottle.currentTime = 0;

        this.glas_break.pause();
        this.glas_break.currentTime = 0;

        this.endboss_hurt.pause();
        this.endboss_hurt.currentTime = 0;

        this.endboss_win.pause();
        this.endboss_win.currentTime = 0;

        this.pepe_game_win.pause();
        this.pepe_game_win.currentTime = 0;
    }
}
