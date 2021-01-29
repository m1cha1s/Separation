function Agent(pos = new Vector2D(0, 0), vel = new Vector2D(0, 0), colorValue = 0) {
  this.pos = pos; 
  this.vel = vel; 
  this.color = color(colorValue); 

  this.intersects = function(agent) {
    return 20 >= this.pos.dist(agent.pos);
  };

  this.update = function() {
    if (pos.x >= 390 || pos.x <= 10) {
      this.vel.mult(-1);
    }
    this.pos.add(this.vel);
  };

  this.draw = function() {
    fill(this.color); 
    ellipse(pos.x, pos.y, 20, 20);
  };

  return this;
}
