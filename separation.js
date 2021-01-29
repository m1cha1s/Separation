var agentCount = 2000;
var agentSpeed = 1;
var agents = [];

var screenBoundry = 20;
var screenSize;

function setup() {
    screenSize = new Vector(windowWidth, windowHeight);
    for(var i = 0; i < agentCount; i ++)
    {
        agents.push(new Agent(new Vector(random(0, screenSize.x - screenBoundry), random(0, screenSize.y - screenBoundry)), new Vector(random(-1,1)*agentSpeed, random(-1,1)*agentSpeed), 255));
    }
    
    createCanvas(screenSize.x, screenSize.y);
}

function draw() {
    background(100);
    noStroke();
    for(var i = 0; i < agents.length; i++)
    {
        for(var j = 0; j < agents.length; j++)
        {
            agents[i].intersects(agents[j]);
        }
        agents[i].draw();
        agents[i].update();
    }
}
