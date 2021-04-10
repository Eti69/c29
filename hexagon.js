class Hexagon{
constructor(x,y,radius){
var options={
restitution:1,
friction:1,
density:3
}
this.image=loadImage("polygon.png");
this.body=Bodies.circle(x,y,radius,options);
this.height=height;
this.radius=radius;
World.add(world,this.body);

}
display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
imageMode(CENTER)
fill("green");
image(this.image,0,0,this.radius,this.radius);
pop();


}
}