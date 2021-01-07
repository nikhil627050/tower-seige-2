class Bob {
    constructor(x,y,width,height,angle) {
      var options = {
          restitution:0.8,
          friction:1.0,
          density:0.04
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(CENTER);
      stroke("orange")
      strokeWeight(7)
      fill("green")
      ellipse(0, 0, this.width, this.height);
      pop()
    }
  };
