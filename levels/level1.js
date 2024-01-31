let level1; 
 function initLevel() {
  
level1 = new Level(
    [new Chicken(300), new Chicken(600), new Chicken(1000), new Chicken(1500), new Chicken(1900),new Chicken(2200), new Chicken(2500), 
      new Chicken(2700), new Chicken(2900), new Chicken(3200), new Chicken(3500), new Chicken(3700), new Chicken(4000), 
      new Endboss()],
    [new Cloud(100), new Cloud(500), new Cloud(800), new Cloud(1200), new Cloud(1600), new Cloud(2000), new Cloud(2300), new Cloud(2900), new Cloud(3400),
    new Cloud(3800), new Cloud(4500), new Cloud(4900), new Cloud(5300), new Cloud(5800), new Cloud(6400),],
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
      [new Coins(120), new Coins(200), new Coins(400), new Coins(450), new Coins(700), new Coins(1100), new Coins(1200), new Coins(1300), new Coins(1700), new Coins(1800), new Coins(2000)
        , new Coins(2100), new Coins(2500), new Coins(2550), new Coins(2800), new Coins(3000), new Coins(3400), new Coins(3600), new Coins(4000), new Coins(4100)],
      [new Bottles(135), new Bottles(145), new Bottles(300), new Bottles(380), new Bottles(450), new Bottles(460), new Bottles(560), new Bottles(620), new Bottles(1200), new Bottles(1700), new Bottles(2100)
        , new Bottles(2400), new Bottles(2700), new Bottles(3100), new Bottles(3150), new Bottles(3180), new Bottles(400), new Bottles(4300)]
);} 