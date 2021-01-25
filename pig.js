class Pig {
    constructor(x, y) { // constructor allows us to give parameters to each rectangle
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50,50 , options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push(); // will save the old properties and allow you to write new ones
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill('red');
      rect(0, 0, this.width, this.height);
      pop();// reverts back to the old settings that were there before the push
    }
  };