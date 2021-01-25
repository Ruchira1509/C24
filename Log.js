class Log {
    constructor(x, y,height, angle) { // constructor allows us to give parameters to each rectangle
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0

      }
      this.body = Bodies.rectangle(x, y, 20, height , options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);// the angle is always in radients, radients are measured in PI and pi= 180 degrees(angle) 

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push(); // will save the old properties and allow you to write new ones
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);

      stroke('blue');
      strokeWeight(4);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();// reverts back to the old settings that were there before the push
    }
  }