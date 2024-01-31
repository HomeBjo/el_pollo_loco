let level1; 
 function initLevel() {
  
level1 = new Level(
    [new Chicken(), new Chicken(), new Chicken(), new Endboss()],
    [new Cloud()],
    [
      new BackgroundObject("img/5_background/layers/air.png", -719, -2),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719, -2.0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719, -1.5),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719, 0),
      
      new BackgroundObject("img/5_background/layers/air.png", 0, -2),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0, -2.0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0, -1.5),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0, 0),
      
      new BackgroundObject("img/5_background/layers/air.png", 719, -2),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719, -2.0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719, -1.5),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719, 0),
      
      new BackgroundObject("img/5_background/layers/air.png", 719*2, -2),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719*2, -2.0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719*2, -1.5),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719*2, 0),
      
      new BackgroundObject("img/5_background/layers/air.png", 719*3, -2),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*3, -2.0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*3, -1.5),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*3, 0),
      
      new BackgroundObject("img/5_background/layers/air.png", 719*4, -2),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719*4, -2.0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719*4, -1.5),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719*4, 0),
      
      new BackgroundObject("img/5_background/layers/air.png", 719*5, -2),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*5, -2.0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*5, -1.5),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*5, 0),
      
      new BackgroundObject("img/5_background/layers/air.png", 719*6, -2),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719*6, -2.0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719*6, -1.5),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719*6, 0),

      new BackgroundObject("img/5_background/layers/air.png", 719*7, -2),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*7, -2.0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*7, -1.5),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*7, 0),
      ],
      [new Coins(), new Coins(), new Coins()],
      [new Bottles(), new Bottles(), new Bottles(), new Bottles(),new Bottles(),new Bottles(),new Bottles()]
);}