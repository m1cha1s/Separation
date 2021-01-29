function Vector2D(x = 0, y = 0) {
 
  this.x = x;
  this.y = y;
  
  this.add = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
  };
  
  this.sub = function(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  };
  
  this.mult = function(factor) {
    this.x *= factor;
    this.y *= factor;
  };
  
  this.mag = function() {
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
  };
  
  this.set = function(vector) {
    this.x = vector.x;
    this.y = vector.y;
  };
  
  this.dist = function(vector) {
    return dist(this.x, this.y, vector.x, vector.y);
  };
  
}
