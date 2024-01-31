class Level {
  enemies;
  clouds;
  backgroundObject;
  level_end_x = 5000;
  coins;
  bottles;

  constructor(enemies, clouds, backgroundObject, coins, bottles) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObject = backgroundObject;
    this.coins = coins;
    this.bottles = bottles;
  }
}
