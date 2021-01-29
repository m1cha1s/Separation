var agentSize = 5;

class Agent 
{
    constructor(pos = new Vector(0, 0), vel = new Vector(0, 0), colorValue = 0)
    {
        this.pos = pos; 
        this.vel = vel; 
        this.color = color(colorValue); 
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
        this.pos.add(this.vel);
    }

    draw() {
        fill(this.color); 
        ellipse(this.pos.x, this.pos.y, agentSize, agentSize);
    }
}
