class Level {
  enemies;
  clouds;
  backgroundObject;
  level_end_x = 5000;
  coins;
  bottles;

  /**
   * Constructor for the Level class.
   * @param {array} enemies - Array of enemy objects.
   * @param {array} clouds - Array of cloud objects.
   * @param {array} backgroundObject - Array of background objects.
   * @param {array} coins - Array of coin objects.
   * @param {array} bottles - Array of bottle objects.
   */
  constructor(enemies, clouds, backgroundObject, coins, bottles) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObject = backgroundObject;
    this.coins = coins;
    this.bottles = bottles;
  }
}
