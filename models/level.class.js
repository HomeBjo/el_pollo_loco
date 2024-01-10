class Level{
    enemies;
    clouds;
    backgroundObject;
    level_end_x=2250;                    //lvl begrenzung nach rechts laufen *2  deswegen ausgelagert 
    coins;
    bottles;

    constructor(enemies,clouds,backgroundObject,coins,bottles){
        this.enemies=enemies;
        this.clouds=clouds;
        this.backgroundObject=backgroundObject;
        this.coins=coins;
        this.bottles=bottles;

    }
}