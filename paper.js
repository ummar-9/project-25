class paper {
    constructor(x,y) {
       var options ={
           isStatic: false,
           restitution: 0.1,
           friction: 0.5,
           density: 1.2
           
    }
    this.image = loadImage("paper.png");

    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    World.add(world,this.body);
    }
 display(){
var pos = this.body.position;
var angle = this.body.angle;
push()
translate(pos.x,pos.y)
rotate(angle);
imageMode(CENTER);
image(this.image,0,0, 65,65);
 }
}