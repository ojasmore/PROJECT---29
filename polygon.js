class Polygon{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            friction : 1,
            density : 10
        }
        this.radius = radius;
        
        this.body = Bodies.circle(x,y,this.radius);
        World.add(world,this.body);

    }
    display(){
      
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}