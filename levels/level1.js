let level1; 
 function initLevel() {
  
level1 = new Level(
    [new Chicken(300), new Chicken(600), new Chicken(1000), new Chicken(1500), new Chicken(1900),new Chicken(2200), new Chicken(2500), 
      new Chicken(2700), new Chicken(2900), new Chicken(3200), new Chicken(3500), new Chicken(3700), new Chicken(4000), 
      new Endboss()],
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