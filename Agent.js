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
        if(agent != this && agentSize >= this.pos.dist(agent.pos))
        {
            this.vel.mult(-1);
        }
    }

    update() {
        if (this.pos.x >= width - agentSize/2 || this.pos.x <= agentSize/2) {
            this.vel.x *= -1;
        }
        else if (this.pos.y >= height - agentSize/2 || this.pos.y <= agentSize/2)
        {
            this.vel.y *= -1;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    draw() {
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, agentSize, agentSize);
    }
}
