class Box {
  constructor(x, y, width, height) { // constructor allows us to give parameters to each rectangle
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push(); // will save the old properties and allow you to write new ones
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke('green');
    strokeWeight(4);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();// reverts back to the old settings that were there before the push
  }
};
