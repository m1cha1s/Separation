var agentSize = 5;

class Agent
{
    constructor(pos = new p5.Vector(0, 0), vel = new p5.Vector(0, 0), colorValue = 0)
    {
        this.pos = pos;
        this.vel = vel;
        this.acc = new p5.Vector();
        this.color = color(colorValue);
    }

    applyForce(force = new p5.Vector())
    {
      this.acc.add(force);
    }

    intersects(agent) {
        if(agent != this && agentSize*3 >= this.pos.dist(agent.pos))
        {
          let tmp = p5.Vector.sub(this.pos, agent.pos)
          this.acc.add(tmp);
        }
    }

    update() {
        if (this.pos.x >= width - agentSize/2) {
          let tmp = p5.Vector.sub(new p5.Vector(-1, this.pos.y), this.pos)
          this.acc.add(tmp);
        }
        else if (this.pos.x <= agentSize/2)
        {
          let tmp = p5.Vector.sub(new p5.Vector(1, this.pos.y), this.pos)
          this.acc.add(tmp);
        }
        else if (this.pos.y >= height - agentSize/2)
        {
          let tmp = p5.Vector.sub(new p5.Vector(this.pos.x, -1), this.pos)
          this.acc.add(tmp);
        }
        else if (this.pos.y <= agentSize/2)
        {
          let tmp = p5.Vector.sub(new p5.Vector(this.pos.x, 1), this.pos)
          this.acc.add(tmp);
        }
        this.acc.limit(0.05);
        this.vel.add(this.acc);
        //this.vel.limit(1);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    draw() {
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, agentSize, agentSize);
    }
}
