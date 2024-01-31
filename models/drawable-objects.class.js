class drawableObjects {
  img;
  imageChace = {};
  currentImage = 0;
  x = 120;
  y = 285;
  height = 150;
  width = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.log("Error loading image", e);
      console.log("could not load image", this.img);
    }
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageChace[path] = img;
    });
  }

  resolveImageIndex() {
    if (this.percentage == this.currentStatus_max) {
      return 5;
    } else if (this.percentage > this.currentStatus_80) {
      return 4;
    } else if (this.percentage > this.currentStatus_60) {
      return 3;
    } else if (this.percentage > this.currentStatus_40) {
      return 2;
    } else if (this.percentage >= this.currentStatus_low) {
      return 1;
    } else {
      return 0;
    }
  }
}
