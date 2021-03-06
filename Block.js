class Block{
    constructor(x,y,width,height){
    var options = {
    restitution:0.8,
    friction:1.0,
    density:1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
    if(this.body.speed<5){
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    strokeWeight(3);
    stroke("gray");
    fill(169);
    rect(0,0,this.width,this.height)
    pop()
    }
    else{
    World.remove(world,this.body);
    }
    }
    }