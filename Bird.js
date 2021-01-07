class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.i = []


  }

  display() {
    //this.body.position.x = mouseX;
    //th

    super.display();
    if (this.body.position.x > 230 && this.body.speed> 20) {
      var poz = [this.body.position.x, this.body.position.y]
      this.i.push(poz);
    }
    
    for (var r = 0; r < this.i.length; r++) {
      image(this.smoke, this.i[r][0], this.i[r][1])
    }
  }
}