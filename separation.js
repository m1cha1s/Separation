var env = new Envoirement();

function setup() {


  createCanvas(400, 400);
}

function draw() {
  background(100);
  for (var x=0; x<2; x++) {
    for (var i=0; i<2; i++) {
      if (x!==i) {
        if (agents[x].intersects(agents[i])) {
          agents[x].color = color(127);
          agents[x].vel.mult(-1);
        } else {
          agents[x].color = color(255);
        }
      }
    }
    agents[x].draw(); 
    agents[x].update();
  }
}

function Envoirement(numberOfAgents = 10) {
  this.agents = [];
  for (var i = 0; i<numberOfAgents; i++)
  {
    agents.push(new Agent(pos = new Vector2D(random(0, 200), 200), vel = new Vector2D(1, 0), colorValue = 255));
  }

  this.update = function()
  {
  };

  this.draw = function()
  {
  };
}
