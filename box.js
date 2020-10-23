class box
{
constructor(x,y,width,height)
{
    var options ={
        restitution: 1.0
    }
    this.width = width;
    this.height = height;
this.ball = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.ball)
}
display()
{
    var pos = this.ball.position;
    var angle = this.ball.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
rectMode(CENTER)
fill(255);
rect(0,0,this.width,this.height)
pop();
}
}
