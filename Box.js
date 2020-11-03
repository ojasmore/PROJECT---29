class Box {
    constructor(x,y,width,height) {
      
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.color = color(random(0,255),random(0.255),random(0,255));
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }