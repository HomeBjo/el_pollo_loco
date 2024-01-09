class Level{
    enemies;
    clouds;
    backgroundObject;
    level_end_x=2250;                    //lvl begrenzung nach rechts laufen *2  deswegen ausgelagert 

    constructor(enemies,clouds,backgroundObject){
        this.enemies=enemies;
        this.clouds=clouds;
        this.backgroundObject=backgroundObject;

    }
}